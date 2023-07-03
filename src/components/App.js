import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Main from './Pages/Main';
import Footer from './Footer';
import Trending from './Pages/Trending';
import RandomGif from './Pages/RandomGif';
import Error from './Error';
import GifPage from './Gifs/GifPage';
import Loader from './Loader';

function App() {
  const [trendingGifs, setTrendingGifs] = React.useState([]);
  const [searchGifs, setSearchGifs] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  
  return (
    <div className="page">
      <Header />

      <main className="container">
        <Routes>
          <Route
            path="/search/:page"
            element={<Main searchGifs={searchGifs} setSearchGifs={setSearchGifs} />}
          />

          <Route
            path="/trending/:page"
            element={
              <Trending
                trendingGifs={trendingGifs}
                setTrendingGifs={setTrendingGifs}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />

          <Route
            path="/random-gif"
            element={<RandomGif isLoading={isLoading} setIsLoading={setIsLoading} />}
          />

          <Route path="/trending/gifs/:id" element={<GifPage gifs={trendingGifs} />} />

          <Route path="/search/gifs/:id" element={<GifPage gifs={searchGifs} />} />

          <Route path="/" element={<Navigate to="/search/1" replace />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
