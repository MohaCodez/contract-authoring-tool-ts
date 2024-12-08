import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface AddSectionProps {
  onAdd: (title: string, isHeading?: boolean, showTitle?: boolean) => void;
}

export const AddSection: React.FC<AddSectionProps> = ({ onAdd }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState('');
  const [isHeading, setIsHeading] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim(), isHeading, showTitle);
      setTitle('');
      setIsHeading(false);
      setShowTitle(true);
      setIsAdding(false);
    }
  };

  if (!isAdding) {
    return (
      <div className="space-y-2">
        <button
          onClick={() => setIsAdding(true)}
          className="w-full flex items-center justify-center p-3 rounded-lg border-2 border-dashed border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600"
        >
          <Plus size={20} className="mr-2" />
          Add Section
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Section title"
        className="w-full p-2 border rounded-lg"
        autoFocus
      />
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isHeading"
            checked={isHeading}
            onChange={(e) => setIsHeading(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="isHeading">Make this a heading section</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="showTitle"
            checked={showTitle}
            onChange={(e) => setShowTitle(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="showTitle">Show section title in content</label>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Add
        </button>
        <button
          type="button"
          onClick={() => setIsAdding(false)}
          className="flex-1 bg-gray-200 text-gray-800 p-2 rounded-lg hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};