import React from 'react';
import { X } from 'lucide-react';
import type { Section } from '../../types';

interface TemplateListProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (sections: Section[]) => void;
}

export const TemplateList: React.FC<TemplateListProps> = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  const templates = JSON.parse(localStorage.getItem('templates') || '[]');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[500px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Load Template</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-2 max-h-[400px] overflow-y-auto">
          {templates.map((template: any) => (
            <button
              key={template.id}
              onClick={() => {
                onSelect(template.sections);
                onClose();
              }}
              className="w-full text-left p-3 rounded-lg hover:bg-gray-100 flex justify-between items-center"
            >
              <span>{template.name}</span>
              <span className="text-sm text-gray-500">
                {new Date(template.createdAt).toLocaleDateString()}
              </span>
            </button>
          ))}
          {templates.length === 0 && (
            <p className="text-gray-500 text-center py-4">No templates saved yet</p>
          )}
        </div>
      </div>
    </div>
  );
};