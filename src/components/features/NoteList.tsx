'use client';

import React from 'react';
import { useNotes } from '../../contexts/NotesContext';

const NoteList: React.FC = () => {
  const { notes, deleteNote } = useNotes();

  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index} className="mb-2">
          <div className="flex justify-between items-center">
            <span>{note}</span>
            <button onClick={() => deleteNote(index)} className="text-red-500">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
