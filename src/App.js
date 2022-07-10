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
import MovieDetailCast from './Components/MovieDetailCast';
import CastProfile from './Components/CastProfile';
import SearchResults from './Components/SearchResults';
import ShowResults from './Components/ShowResults';
import SerieDetailInfo from './Components/SerieDetailInfo';
import SerieDetailCast from './Components/SerieDetailCast';
import SerieDetailSimilar from './Components/SerieDetailSimilar';

const App = () => {
 return (
  <BrowserRouter className='main-app'>
   <Nav />
   <Routes>
    <Route path='/' element={<Main />} />
    <Route path='popularmovies' element={<PopularMovies />} />
    <Route path='popularmovies/:movieid' element={<MovieDetail />}>
     <Route path='moviedetailinfo' element={<MovieDetailInfo />} />
     <Route path='moviedetailcast' element={<MovieDetailCast />} />
     <Route path='moviedetailsimilar' element={<MovieDetailSimilar />} />
    </Route>
    <Route path='castprofile/:profileid' element={<CastProfile />} />
    <Route path='searchresults/:searchresults' element={<SearchResults />} />
    <Route path='showresults/:listname' element={<ShowResults />} />
    <Route path='popularseries' element={<PopularSeries />} />
    <Route path='popularseries/:serieid' element={<SerieDetail />} >
     <Route path='seriedetailinfo' element={<SerieDetailInfo />} />
     <Route path='seriedetailcast' element={<SerieDetailCast />} />
     <Route path='castprofile/:profileid' element={<CastProfile />} />
     <Route path='seriedetailsimilar' element={<SerieDetailSimilar />} />
    </Route>
    <Route path='*' element={<NotFound404 />} />
   </Routes>
   <Footer />
  </BrowserRouter>
 )
}

export default App;