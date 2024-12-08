import React, { useState } from 'react';
import { Edit2, Trash2, ChevronUp, ChevronDown, Check, X } from 'lucide-react';
import type { Section } from '../../types';

interface SectionItemProps {
  section: Section;
  index: number;
  isActive: boolean;
  isFirst: boolean;
  isLast: boolean;
  onSectionClick: (sectionId: string) => void;
  onSectionDelete: (sectionId: string) => void;
  onSectionTitleChange: (sectionId: string, newTitle: string) => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}

export const SectionItem: React.FC<SectionItemProps> = ({
  section,
  index,
  isActive,
  isFirst,
  isLast,
  onSectionClick,
  onSectionDelete,
  onSectionTitleChange,
  onMoveUp,
  onMoveDown,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(section.title);

  const handleSave = () => {
    if (editedTitle.trim()) {
      onSectionTitleChange(section.id, editedTitle.trim());
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`flex items-center p-3 rounded-lg ${
        isActive ? 'bg-blue-100' : 'bg-white hover:bg-gray-50'
      } border`}
      onClick={() => !isEditing && onSectionClick(section.id)}
    >
      <div className="flex flex-col mr-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onMoveUp(index);
          }}
          disabled={isFirst}
          className={`p-0.5 hover:text-blue-600 ${
            isFirst ? 'text-gray-300 cursor-not-allowed' : 'text-gray-400'
          }`}
        >
          <ChevronUp size={16} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onMoveDown(index);
          }}
          disabled={isLast}
          className={`p-0.5 hover:text-blue-600 ${
            isLast ? 'text-gray-300 cursor-not-allowed' : 'text-gray-400'
          }`}
        >
          <ChevronDown size={16} />
        </button>
      </div>
      
      {isEditing ? (
        <div className="flex-1 flex items-center space-x-2">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="flex-1 px-2 py-1 border rounded"
            autoFocus
          />
          <button onClick={handleSave} className="p-1 hover:text-green-600">
            <Check size={16} />
          </button>
          <button 
            onClick={() => {
              setEditedTitle(section.title);
              setIsEditing(false);
            }} 
            className="p-1 hover:text-red-600"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <>
          <span className={`flex-1 truncate ${section.isHeading ? 'font-bold' : ''}`}>
            {section.title}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
            className="p-1 hover:text-blue-600 mr-1"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSectionDelete(section.id);
            }}
            className="p-1 hover:text-red-600"
          >
            <Trash2 size={16} />
          </button>
        </>
      )}
    </div>
  );
}; 