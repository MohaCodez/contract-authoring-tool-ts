import React from 'react';
import type { Section } from '../../types';
import { SectionItem } from './SectionItem';

interface SectionListProps {
  sections: Section[];
  activeSection?: string;
  onSectionClick: (sectionId: string) => void;
  onSectionsReorder: (sections: Section[]) => void;
  onSectionDelete: (sectionId: string) => void;
  onSectionTitleChange: (sectionId: string, newTitle: string) => void;
}

export const SectionList: React.FC<SectionListProps> = ({
  sections,
  onSectionClick,
  onSectionsReorder,
  onSectionDelete,
  activeSection,
  onSectionTitleChange,
}) => {
  const handleMoveUp = (index: number) => {
    if (index > 0) {
      const newSections = [...sections];
      [newSections[index - 1], newSections[index]] = [newSections[index], newSections[index - 1]];
      onSectionsReorder(newSections);
    }
  };

  const handleMoveDown = (index: number) => {
    if (index < sections.length - 1) {
      const newSections = [...sections];
      [newSections[index], newSections[index + 1]] = [newSections[index + 1], newSections[index]];
      onSectionsReorder(newSections);
    }
  };

  return (
    <div className="space-y-2 min-h-[200px]">
      {sections.map((section, index) => (
        <SectionItem
          key={section.id}
          section={section}
          index={index}
          isActive={section.id === activeSection}
          isFirst={index === 0}
          isLast={index === sections.length - 1}
          onSectionClick={onSectionClick}
          onSectionDelete={onSectionDelete}
          onSectionTitleChange={onSectionTitleChange}
          onMoveUp={handleMoveUp}
          onMoveDown={handleMoveDown}
        />
      ))}
    </div>
  );
};