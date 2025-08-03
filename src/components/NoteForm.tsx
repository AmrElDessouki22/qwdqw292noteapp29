"use client";

import { useState } from 'react';
import { useNotes } from '../context/NotesContext';
import { generateId } from '../utils/noteUtils';

const NoteForm = () => {
  const { notes } = useNotes();
  const [content, setContent] = useState('');

  const addNote = () => {
    const id = generateId();
    notes.push({ id, content });
    setContent('');
  };

  return (
    <div className="note-form">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type your note here..."
      />
      <button onClick={addNote}>Add Note</button>
    </div>
  );
};

export default NoteForm;
