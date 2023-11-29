import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Movies } from './Components/pages/Movies';
import { Celebrity } from './Components/pages/Celebrity';
import { Header } from './Components/Header';
import { Home } from './Components/pages/Home';
import './App.css';
import MovieDetail from './Components/pages/MovieDetail';
import { NotFound } from './Components/pages/NotFound';
import Weather from './Components/pages/Weather';
import Login from './Components/pages/Login';
import TV from './Components/pages/TV';
import TVProgram from './Components/pages/TVProgram';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="weather" element={<Weather />} />
        <Route path="tv" element={<TV />} />
        <Route path="movies" element={<Movies />} />
        <Route path="celebrity" element={<Celebrity />} />
        <Route path="login" element={<Login />} />
        <Route path="/movie/:name" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/tvprogram" element={<TVProgram/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
