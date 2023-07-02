import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Pages/Main';
import Footer from './Footer';
import Trending from './Pages/Trending';
import RandomGif from './Pages/RandomGif';
import NavBar from './NavBar';
import Error from './Error';

function App() {
  const [isNavBarNeeded, setIsNavBarNeeded] = React.useState(false);

  return (
    <div className="page">
      <Header />
      <NavBar />

      <main className="container">
        <Routes>
          <Route path="/search" element={<Main />} />

          <Route path="/trending/:page" element={<Trending />} />

          <Route path="/random-gif" element={<RandomGif />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
