import React from 'react';
import '../globals.css';
import { NotesProvider } from '../contexts/NotesContext';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

export const metadata = {
  title: 'Note App',
  description: 'A Next.js Note-taking application',
};

const RootLayout: React.FC = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NotesProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </NotesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
