import React from 'react';
import { X } from 'lucide-react';
import type { Section } from '../../types';

interface PreviewModeProps {
  isOpen: boolean;
  onClose: () => void;
  sections: Section[];
}

export const PreviewMode: React.FC<PreviewModeProps> = ({ isOpen, onClose, sections }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      <div className="max-w-4xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Document Preview</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6 pb-16">
          {sections.map((section) => (
            <div key={section.id} className="preview-section">
              {!section.isHeading && section.showTitle && (
                <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
              )}
              <div
                dangerouslySetInnerHTML={{ __html: section.content }}
                className="prose max-w-none 
                  [&_.ql-align-center]:text-center 
                  [&_.ql-align-right]:text-right
                  [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4
                  [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4
                  [&_li]:mb-1
                  [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4
                  [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-3
                  [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mb-2
                  [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:mb-2
                  [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:italic
                  [&_p]:mb-4
                  [&_table]:w-full [&_table]:border-collapse
                  [&_td]:border [&_td]:p-2
                  [&_th]:border [&_th]:p-2 [&_th]:bg-gray-50"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};