import './App.scss';
import './Styles/Reset.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import PopularMovies from './Components/PopularMovies';
import PopularSeries from './Components/PopularSeries';
import NotFound404 from './Components/NotFound404';
import MovieDetail from './Components/MovieDetail';
import SerieDetail from './Components/SerieDetail';
import MovieDetailInfo from './Components/MovieDetailInfo';
import MovieDetailSimilar from './Components/MovieDetailSimilar';
import MovieDetailCasting from './Components/MovieDetailCasting';

const App = () => {
 return (
  <BrowserRouter>
   <Nav />
   <Routes>
    <Route path='/' element={<Main />} />
    <Route path='/popularmovies' element={<PopularMovies />} />
    <Route path='/popularmovies/:movieid' element={<MovieDetail />}>
     <Route path='moviedetailinfo' element={<MovieDetailInfo />} />
     <Route path='moviedetailcasting' element={<MovieDetailCasting />} />
     <Route path='moviedetailsimilar' element={<MovieDetailSimilar />} />
    </Route>
    
    <Route path='/popularseries' element={<PopularSeries />} />
    <Route path='/popularseries/:serieid' element={<SerieDetail />} />
    <Route path='*' element={<NotFound404 />} />
   </Routes>
   <Footer />
  </BrowserRouter>
 )
}

export default App;