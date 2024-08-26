// src/components/TextEditor.js
import React, { useState } from 'react';
import '../styles/TextEditor.css';

const TextEditor = ({ onSave, onInsertVariables }) => {
  const [content, setContent] = useState('');

  const handleSave = () => {
    onSave(content);
  };

  const handleInsertVariables = () => {
    onInsertVariables();
  };

  return (
    <div className="text-editor">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="10"
        cols="80"
      />
      <div className="editor-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleInsertVariables}>Insert Variables</button>
      </div>
    </div>
  );
};

export default TextEditor;
