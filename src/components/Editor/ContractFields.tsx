import React from 'react';

interface ContractFieldsProps {
  onInsert: (fieldHTML: string) => void;
}

export const ContractFields: React.FC<ContractFieldsProps> = ({ onInsert }) => {
  const fields = [
    { label: 'Date Field', html: '_____' },
    { label: 'Checkbox', html: '<input type="checkbox">' },
    { label: 'Text Field', html: '________________________________' },
    { label: 'Currency Field', html: '$________' },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {fields.map(field => (
        <button
          key={field.label}
          onClick={() => onInsert(field.html)}
          className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
        >
          {field.label}
        </button>
      ))}
    </div>
  );
}; 