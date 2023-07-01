import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  
  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/search" element={
          <Main isSearchActive={true} />
        } />

        <Route path="/gifs" element={
          <Main isSearchActive={false} />
        } />

        {/* <Route path="/random-gif" element={
          <RandomGif />
        } /> */}

        <Route path="*" element={<Navigate to="/search" replace /> }/>

      </Routes>

      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
