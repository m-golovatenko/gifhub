import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Pages/Main';
import Footer from './Footer';
import Trending from './Pages/Trending';
import RandomGif from './Pages/RandomGif';
import NavBar from './NavBar';
import Error from './Error';
import GifPage from './Gifs/GifPage';

function App() {
  const [trendingGifs, setTrendingGifs] = React.useState([]);
  const [searchGifs, setSearchGifs] = React.useState([]);

  return (
    <div className="page">
      <Header />
      <NavBar />

      <main className="container">
        <Routes>
          <Route
            path="/search"
            element={<Main searchGifs={searchGifs} setSearchGifs={setSearchGifs} />}
          />

          <Route
            path="/trending/:page"
            element={<Trending trendingGifs={trendingGifs} setTrendingGifs={setTrendingGifs} />}
          />

          <Route path="/random-gif" element={<RandomGif />} />

          <Route path="/search/:id" element={<GifPage />} />
          <Route path="/trending/:id" element={<GifPage />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
