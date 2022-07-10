import HorizontalList from './HorizontalList';
import './PopularSeries.scss';

const PopularSeries = () => {
 return (
  <div className='popular-series-container'>
   <HorizontalList
    list_title={'TV shows on air today'}
    category={'airing_today'}
    type={'tv'}
   />
   <HorizontalList
    list_title={'popular tv shows'}
    category={'popular'}
    type={'tv'}
   />
   <HorizontalList
    list_title={'top rated tv shows'}
    category={'top_rated'}
    type={'tv'}
   />
  </div>
 )
}

export default PopularSeries;