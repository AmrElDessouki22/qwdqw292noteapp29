import React from 'react';
import NoteList from '../components/features/NoteList';
import AddNote from '../components/features/AddNote';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <AddNote />
      <NoteList />
    </div>
  );
};

export default HomePage;
