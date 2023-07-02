import React from 'react';
import { Route, Routes, Navigate  } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Trending from './Trending';

function App() {
  return (
    <div className="page">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/search" element={<Main />} />

          <Route path="/trending/:page" element={<Trending />} />

          {/* <Route path="/random-gif" element={
          <RandomGif />
        } /> */}

          <Route path="*" element={<Navigate to="/search" replace />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
