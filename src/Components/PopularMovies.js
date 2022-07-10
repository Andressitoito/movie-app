import HorizontalList from './HorizontalList';
import './PopularMovies.scss';

const PopularMovies = () => {

 return (
  <div className='popular-movies-container'>
   <HorizontalList
    list_title={'popular movies'}
    category={'popular'}
    type={'movie'}
   />
   <HorizontalList
    list_title={'upcoming movies'}
    category={'upcoming'}
    type={'movie'}
   />
   {<HorizontalList
    list_title={'top rated movies'}
    category={'top_rated'}
    type={'movie'}
   />}

  </div>
 )
}

export default PopularMovies;