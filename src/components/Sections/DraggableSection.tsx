import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { GripVertical, Trash2, Edit2, Check, X } from 'lucide-react';
import type { Section } from '../../types';

interface DraggableSectionProps {
  section: Section;
  index: number;
  isActive: boolean;
  onSectionClick: (sectionId: string) => void;
  onSectionDelete: (sectionId: string) => void;
  onSectionTitleChange: (sectionId: string, newTitle: string) => void;
}

export const DraggableSection: React.FC<DraggableSectionProps> = ({
  section,
  index,
  isActive,
  onSectionClick,
  onSectionDelete,
  onSectionTitleChange,
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
    <Draggable draggableId={section.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`flex items-center p-3 rounded-lg ${
            isActive ? 'bg-blue-100' : 'bg-white hover:bg-gray-50'
          } ${snapshot.isDragging ? 'shadow-lg' : ''} border`}
          onClick={() => !isEditing && onSectionClick(section.id)}
        >
          <div
            {...provided.dragHandleProps}
            className="mr-3 text-gray-400 cursor-grab active:cursor-grabbing hover:text-gray-600"
            onClick={(e) => e.stopPropagation()}
          >
            <GripVertical size={20} />
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
      )}
    </Draggable>
  );
};