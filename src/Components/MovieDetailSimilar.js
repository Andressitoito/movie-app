import './MovieDetailSimilar.scss';
import ItemList from './ItemList';
import useFetchSimilar from '../Hooks/useFetchSimilar';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';

const MovieDetailSimilar = () => {

 const params = useParams()

 const [page, setPage] = useState(1)
 const [results, isLoading, totalPages] = useFetchSimilar('movie', params.movieid, 'similar', page)

 const handleChange = (event, value) => {
  setPage(value);
 };

 return (
  <div className='detail-similar'>

   <div className='pagination-wrapper'>
    <Pagination
     className='pagination'
     count={totalPages > 500 ? 500 : totalPages}
     page={page}
     onChange={handleChange}
     color="primary"
    />
    {
     !isLoading &&
     <CircularProgress
      className='loader'
      color="inherit" />
    }
   </div>

   <div className='detail-similar'>



    {
     isLoading && (
      <>



       {
        results.results.map(({ id, title, vote_average, poster_path }) => (
         <ItemList
          key={id}
          id={id}
          title={title}
          vote_average={vote_average}
          poster_path={poster_path}
         />
        ))
       }


      </>
     )
    }



   </div>
   <div className='pagination-wrapper'>
    <Pagination
     className='pagination'
     count={totalPages > 500 ? 500 : totalPages}
     page={page}
     onChange={handleChange}
     color="primary"
    />
   </div>

  </div>
 )
}

export default MovieDetailSimilar;