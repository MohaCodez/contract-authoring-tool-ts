import React, { useState } from 'react';
import { Save, FolderOpen, Plus } from 'lucide-react';
import type { Template, Section } from '../../types';
import { TemplateList } from './TemplateList';
import { SaveTemplateModal } from './SaveTemplateModal';

interface TemplateManagerProps {
  sections: Section[];
  onLoadTemplate: (sections: Section[]) => void;
}

export const TemplateManager: React.FC<TemplateManagerProps> = ({ sections, onLoadTemplate }) => {
  const [isTemplateListOpen, setTemplateListOpen] = useState(false);
  const [isSaveModalOpen, setSaveModalOpen] = useState(false);

  const handleSaveTemplate = (name: string) => {
    const template: Template = {
      id: crypto.randomUUID(),
      name,
      sections: sections,
      createdAt: new Date(),
    };
    const templates = JSON.parse(localStorage.getItem('templates') || '[]');
    localStorage.setItem('templates', JSON.stringify([...templates, template]));
    setSaveModalOpen(false);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setSaveModalOpen(true)}
        className="flex items-center px-3 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        <Save size={16} className="mr-2" />
        Save Template
      </button>
      <button
        onClick={() => setTemplateListOpen(true)}
        className="flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        <FolderOpen size={16} className="mr-2" />
        Load Template
      </button>

      <SaveTemplateModal
        isOpen={isSaveModalOpen}
        onClose={() => setSaveModalOpen(false)}
        onSave={handleSaveTemplate}
      />
      
      <TemplateList
        isOpen={isTemplateListOpen}
        onClose={() => setTemplateListOpen(false)}
        onSelect={onLoadTemplate}
      />
    </div>
  );
};