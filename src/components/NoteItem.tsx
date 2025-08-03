"use client";

import { useState } from 'react';
import { useNotes } from '../context/NotesContext';

interface NoteItemProps {
  id: string;
  content: string;
}

const NoteItem = ({ id, content }: NoteItemProps) => {
  const { editNote } = useNotes();
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(content);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    editNote(id, newContent);
    setIsEditing(false);
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <textarea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
      ) : (
        <p>{content}</p>
      )}
      <button onClick={handleEditClick}>Edit</button>
      {isEditing && <button onClick={handleSaveClick}>Save</button>}
    </div>
  );
};

export default NoteItem;
