import HorizontalList from './HorizontalList';
import './PopularSeries.scss';

const PopularSeries = () => {
 return (
  <div className='popular-series-container'>
   <HorizontalList
    list_title={'TV shows on air today'}
    fetch_keyword={'airing_today'}
    type={'tv'}
   />
   <HorizontalList
    list_title={'popular tv shows'}
    fetch_keyword={'popular'}
    type={'tv'}
   />
   <HorizontalList
    list_title={'top rated tv shows'}
    fetch_keyword={'top_rated'}
    type={'tv'}
   />
  </div>
 )
}

export default PopularSeries;