import React, { forwardRef, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface TextEditorProps {
  value: string;
  onChange: (content: string) => void;
}

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ align: [] }],
    ['blockquote', 'code-block'],
    ['link'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'color', 'background',
  'list', 'bullet',
  'script',
  'indent',
  'align',
  'blockquote', 'code-block',
  'link'
];

export const TextEditor = forwardRef<ReactQuill, TextEditorProps>(({ value, onChange }, ref) => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This helps avoid the findDOMNode warning in strict mode
    if (editorRef.current && ref) {
      if (typeof ref === 'function') {
        ref(editorRef.current.querySelector('.quill') as any);
      } else {
        ref.current = editorRef.current.querySelector('.quill') as any;
      }
    }
  }, [ref]);

  const handleChange = (content: string) => {
    onChange(content || '');
  };

  return (
    <div className="h-full" ref={editorRef}>
      <div className="h-[calc(100%-42px)]">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          className="h-full"
          preserveWhitespace={true}
        />
      </div>
    </div>
  );
});

TextEditor.displayName = 'TextEditor';