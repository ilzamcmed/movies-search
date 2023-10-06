import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MovieContextProvider from './context/provider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MovieContextProvider  movies={[]} setMovies={() =>{}}>
      <App />
    </MovieContextProvider>
  </React.StrictMode>
);

