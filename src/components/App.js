import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import api from '../utils/api';

function App() {
  const [gifs, setGifs] = React.useState([]);

  React.useEffect(() => {
    api.getTrendingGifs()
        .then(data => {
          setGifs(data.data);
        })
        .catch(error => {
          console.error(error);
        })
  }, [])
  
  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/search" element={
          <Main isSearchActive={true} gifs={gifs} />
        } />

        <Route path="/gifs" element={
          <Main isSearchActive={false} gifs={gifs} />
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
