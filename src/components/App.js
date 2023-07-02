import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Main from './Pages/Main';
import Footer from './Footer';
import Trending from './Pages/Trending';

function App() {
  return (
    <div className="page">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/search" element={<Main />} />

          <Route path="/trending/:page" element={<Trending />} />

          {/* <Route path="/random-gif" element={
          <RandomGif />
        } /> */}

          <Route path="*" element={<Navigate to="/search" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
