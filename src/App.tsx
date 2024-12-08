import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import { TextEditor } from './components/Editor/TextEditor';
import { SectionList } from './components/Sections/SectionList';
import { AddSection } from './components/Sections/AddSection';
import { PredefinedSections } from './components/Sections/PredefinedSections';
import { TemplateManager } from './components/Templates/TemplateManager';
import { PreviewMode } from './components/Preview/PreviewMode';
import { LivePreview } from './components/Preview/LivePreview';
import { exportToPDF } from './utils/pdfExport';
import type { Section } from './types';
import { FileText, Eye, Download } from 'lucide-react';
import { ContractTable } from './components/Editor/ContractTable';

function App() {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSection, setActiveSection] = useState<string | undefined>();
  const [isPreviewMode, setPreviewMode] = useState(false);
  const editorRef = useRef<ReactQuill>(null);

  const handleAddSection = (title: string, isHeading?: boolean, showTitle?: boolean) => {
    const newSection: Section = {
      id: crypto.randomUUID(),
      title,
      content: isHeading 
        ? '<h1 style="text-align: center; font-size: 24px; font-weight: bold;">' + title + '</h1>' 
        : showTitle 
          ? '<h3 class="text-lg font-semibold mb-2">' + title + '</h3>'
          : '',
      type: 'custom',
      isHeading,
      showTitle
    };
    setSections([...sections, newSection]);
    setActiveSection(newSection.id);
  };

  const handleAddPredefinedSection = (sectionData: Omit<Section, 'id'>) => {
    const newSection: Section = {
      ...sectionData,
      id: crypto.randomUUID(),
    };
    setSections([...sections, newSection]);
    setActiveSection(newSection.id);
  };

  const handleSectionContent = (content: string) => {
    if (!activeSection) return;
    setSections(sections.map(section =>
      section.id === activeSection ? { ...section, content } : section
    ));
  };

  const handleDeleteSection = (sectionId: string) => {
    setSections(sections.filter(section => section.id !== sectionId));
    if (activeSection === sectionId) {
      setActiveSection(undefined);
    }
  };

  const handleExportPDF = async () => {
    try {
      await exportToPDF(sections);
    } catch (error) {
      console.error('Failed to export PDF:', error);
    }
  };

  const handleSectionTitleChange = (sectionId: string, newTitle: string) => {
    setSections(sections.map(section =>
      section.id === sectionId 
        ? { 
            ...section, 
            title: newTitle,
            content: section.isHeading 
              ? '<h1 style="text-align: center; font-size: 24px; font-weight: bold;">' + newTitle + '</h1>'
              : section.showTitle
                ? section.content.replace(/<h3[^>]*>.*?<\/h3>/, '<h3 class="text-lg font-semibold mb-2">' + newTitle + '</h3>')
                : section.content
          }
        : section
    ));
  };

  const activeContent = sections.find(section => section.id === activeSection)?.content || '';

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Contract Authoring Tool</h1>
            </div>
            <div className="flex items-center space-x-4">
              <TemplateManager
                sections={sections}
                onLoadTemplate={setSections}
              />
              <button
                onClick={() => setPreviewMode(true)}
                className="flex items-center px-3 py-2 text-sm bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                <Eye size={16} className="mr-2" />
                Preview
              </button>
              <button
                onClick={handleExportPDF}
                className="flex items-center px-3 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                <Download size={16} className="mr-2" />
                Export PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8 h-[calc(100vh-12rem)]">
          <div className="w-80 space-y-4">
            <AddSection onAdd={handleAddSection} />
            <PredefinedSections onAdd={handleAddPredefinedSection} />
            <SectionList
              sections={sections}
              onSectionClick={setActiveSection}
              onSectionsReorder={setSections}
              onSectionDelete={handleDeleteSection}
              onSectionTitleChange={handleSectionTitleChange}
              activeSection={activeSection}
            />
          </div>
          
          <div className="flex-1 flex gap-8">
            {activeSection && (
              <div className="flex-1 bg-white rounded-lg shadow">
                <div className="p-2 border-b">
                  <ContractTable 
                    onInsert={(tableHTML) => handleSectionContent(activeContent + tableHTML)} 
                  />
                </div>
                <TextEditor
                  ref={editorRef}
                  value={activeContent}
                  onChange={handleSectionContent}
                />
              </div>
            )}
            <div className="w-1/2">
              <LivePreview sections={sections} />
            </div>
          </div>
        </div>
      </main>

      <PreviewMode
        isOpen={isPreviewMode}
        onClose={() => setPreviewMode(false)}
        sections={sections}
      />
    </div>
  );
}

export default App;