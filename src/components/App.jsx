import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import {Layout} from './Layout';

export const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
};
