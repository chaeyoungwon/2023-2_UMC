import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Movies } from './Components/pages/Movies';
import { Celebrity } from './Components/pages/Celebrity';
import { Header } from './Components/Header';
import { TV } from './Components/pages/TV';
import { Home } from './Components/pages/Home';
import './App.css';
import MovieDetail from './Components/pages/MovieDetail';
import { NotFound } from './Components/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="tv" element={<TV />} />
        <Route path="movies" element={<Movies />} />
        <Route path="celebrity" element={<Celebrity />} />
        <Route path="/movie/:title" element={<MovieDetail />} /> 
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//:title 영화 이름 대체돼서 url 형성됨 (query 개념)