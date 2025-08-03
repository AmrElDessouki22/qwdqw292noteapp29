'use client';

import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useNotes } from '../../contexts/NotesContext';

const AddNote: React.FC = () => {
  const [note, setNote] = useState('');
  const { addNote } = useNotes();

  const handleSubmit = () => {
    if (note.trim() !== '') {
      addNote(note);
      setNote('');
    }
  };

  return (
    <div className="mb-4">
      <Input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a new note" />
      <Button onClick={handleSubmit}>Add Note</Button>
    </div>
  );
};

export default AddNote;
