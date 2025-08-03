import NoteItem from '../../components/NoteItem';
import { useNotes } from '../../context/NotesContext';

const NotesPage = () => {
  const { notes } = useNotes();

  return (
    <div className="notes-page">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} content={note.content} />
      ))}
    </div>
  );
};

export default NotesPage;
