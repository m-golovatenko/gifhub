import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import api from '../utils/api';
import Trending from './Trending';

function App() {
  const [searchGifs, setSearchGifs] = React.useState([]);
  const [trendingGifs, setTrendingGifs] = React.useState([]);

  React.useEffect(() => {
    api
      .getTrendingGifs()
      .then(data => {
        setTrendingGifs(data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/search" element={<Main gifs={searchGifs} />} />

        <Route path="/gifs" element={<Trending gifs={trendingGifs} />} />

        {/* <Route path="/random-gif" element={
          <RandomGif />
        } /> */}

        <Route path="*" element={<Navigate to="/search" replace />} />
      </Routes>

      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
