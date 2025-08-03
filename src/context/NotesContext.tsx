"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface Note {
  id: string;
  content: string;
}

interface NotesContextType {
  notes: Note[];
  editNote: (id: string, newContent: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const editNote = (id: string, newContent: string) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, content: newContent } : note))
    );
  };

  return (
    <NotesContext.Provider value={{ notes, editNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = (): NotesContextType => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
