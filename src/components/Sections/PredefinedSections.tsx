import React, { useState } from 'react';
import { Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { predefinedSections } from '../../data/predefinedSections';
import type { Section } from '../../types';

interface PredefinedSectionsProps {
  onAdd: (section: Omit<Section, 'id'>) => void;
}

export const PredefinedSections: React.FC<PredefinedSectionsProps> = ({ onAdd }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTitleMap, setShowTitleMap] = useState<Record<string, boolean>>({});

  const handleAdd = (section: Omit<Section, 'id'>) => {
    onAdd({
      ...section,
      showTitle: showTitleMap[section.title] ?? true,
      content: showTitleMap[section.title] 
        ? `<h3 class="text-lg font-semibold mb-2">${section.title}</h3>${section.content}`
        : section.content
    });
  };

  return (
    <div className="bg-white rounded-lg border">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 hover:bg-gray-50"
      >
        <span className="font-medium">Predefined Sections</span>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isExpanded && (
        <div className="p-3 border-t space-y-2 max-h-[300px] overflow-y-auto">
          {predefinedSections.map((section) => (
            <div key={section.title} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`showTitle-${section.title}`}
                checked={showTitleMap[section.title] ?? true}
                onChange={(e) => setShowTitleMap(prev => ({
                  ...prev,
                  [section.title]: e.target.checked
                }))}
                className="mr-2"
              />
              <button
                onClick={() => handleAdd(section)}
                className="flex-1 flex items-center p-2 rounded-lg hover:bg-gray-50 text-left text-sm"
              >
                <Plus size={16} className="mr-2 flex-shrink-0 text-gray-400" />
                <span>{section.title}</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};