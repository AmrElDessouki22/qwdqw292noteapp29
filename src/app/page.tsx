import NotesPage from './notes/page';
import NoteForm from '../components/NoteForm';

const HomePage = () => {
  return (
    <div className="home-page">
      <NoteForm />
      <NotesPage />
    </div>
  );
};

export default HomePage;
