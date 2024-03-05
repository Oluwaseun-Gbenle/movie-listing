import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/home-page";
import './App.css'
import TrendingFullList from "./components/full-list-pages/trending-full-list";
import PopularMoviesFullList from "./components/full-list-pages/popular-movies-full-list";
import SeriesFullList from "./components/full-list-pages/series-full-list";
import Movie from "./components/single-movie-page/movie";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trending" element={<TrendingFullList />} />
        <Route path="/popular" element={<PopularMoviesFullList />} />
        <Route path="/series" element={<SeriesFullList />} />
        <Route path="/movie/:id" element={<Movie/>} />
    </Routes>
    </BrowserRouter >

  )
}

export default App
