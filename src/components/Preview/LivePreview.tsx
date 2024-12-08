import React from 'react';
import type { Section } from '../../types';

interface LivePreviewProps {
  sections: Section[];
}

export const LivePreview: React.FC<LivePreviewProps> = ({ sections }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 h-full overflow-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 sticky top-0 bg-white pb-2 border-b">
        Live Preview
      </h2>
      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.id} className="preview-section">
            {!section.isHeading && section.showTitle && (
              <h3 className="text-base font-semibold mb-2 text-gray-800">
                {section.title}
              </h3>
            )}
            <div
              dangerouslySetInnerHTML={{ __html: section.content }}
              className="prose prose-sm max-w-none 
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
        {sections.length === 0 && (
          <p className="text-gray-500 text-center py-4">
            Add sections to see the preview
          </p>
        )}
      </div>
    </div>
  );
}