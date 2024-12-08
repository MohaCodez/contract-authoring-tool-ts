import React from 'react';

interface ContractTableProps {
  onInsert: (tableHTML: string) => void;
}

export const ContractTable: React.FC<ContractTableProps> = ({ onInsert }) => {
  const insertServiceTable = () => {
    const tableHTML = `
      <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
        <thead>
          <tr>
            <th style="border: 1px solid #000; padding: 8px;">Description of Services</th>
            <th style="border: 1px solid #000; padding: 8px;">Number of Projects</th>
            <th style="border: 1px solid #000; padding: 8px;">Price per Project</th>
          </tr>
        </thead>
        <tbody>
          ${Array(6).fill(0).map(() => `
            <tr>
              <td style="border: 1px solid #000; padding: 8px; min-height: 24px;">&nbsp;</td>
              <td style="border: 1px solid #000; padding: 8px; min-height: 24px;">&nbsp;</td>
              <td style="border: 1px solid #000; padding: 8px; min-height: 24px;">$&nbsp;</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    onInsert(tableHTML);
  };

  return (
    <button
      onClick={insertServiceTable}
      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded"
    >
      Insert Service Table
    </button>
  );
}; 