import './ShowResults.scss';
import { useLocation } from 'react-router-dom';
import useFetchList from '../Hooks/useFetchList';
import ItemList from './ItemList';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

const ShowResults = () => {

 const location = useLocation()
 const data = location.state

 const { type, category, list_title } = data
 const [page, setPage] = useState(1)
 const [results, isLoading, totalPages] = useFetchList(type, category, page)
 const handleChange = (event, value) => {
  setPage(value);
 };


 return (
  <div className='show-results-main'>
   <h4 className='horizontal-list-title'>
    {list_title}
   </h4>
   <div className='pagination-wrapper'>
    <Pagination
     className='pagination'
     count={totalPages > 500 ? 500 : totalPages}
     page={page}
     onChange={handleChange}
     color="primary"
    />
    {
     isLoading &&
     <CircularProgress
      className='loader'
      color="inherit" />
    }
   </div>
   <div className='show-results'>
    {
     results.map(({ id, title, name, vote_average, poster_path }) => (
      <ItemList
       key={id}
       id={id}
       title={type === 'movie' ? title : name}
       vote_average={vote_average}
       poster_path={poster_path}
      />
     ))
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

};

export default ShowResults;