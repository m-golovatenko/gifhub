import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Main from './Pages/Main';
import Footer from './Footer';
import Trending from './Pages/Trending';
import RandomGif from './Pages/RandomGif';
import Error from './Pages/Error';
import GifPage from './Pages/GifPage';

function App() {
  const [trendingGifs, setTrendingGifs] = React.useState([]);
  const [searchGifs, setSearchGifs] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [darkTheme, setDarkTheme] = React.useState(false);

  function handleClick() {
    if (darkTheme) {
      setDarkTheme(false);
    } else {
      setDarkTheme(true);
    }
  }

  return (
    <div className={darkTheme ? 'page page_dark' : 'page page_light'}>
      <Header darkTheme={darkTheme} handleClick={handleClick} />

      <main className="container">
        <Routes>
          <Route 
            path="/search" 
            element={<Main setSearchGifs={setSearchGifs} isLoading={isLoading} setIsLoading={setIsLoading} />} />

          <Route
            path="/search/:query/:page"
            element={<Main 
                        searchGifs={searchGifs} 
                        setSearchGifs={setSearchGifs} 
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                    />}
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

          <Route path="/" element={<Navigate to="/search" replace />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
