import './SearchResults.scss'
import { useParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import useFetchSearch from '../Hooks/useFetchSearch';
import SearchResultItem from './SearchResultItem';
import CircularProgress from '@mui/material/CircularProgress';

const SearchResults = () => {

 const params = useParams()
 console.log(params.searchresults)

 const [page, setPage] = useState(1)
 const [results, isLoading, totalPages] = useFetchSearch(params.searchresults, page)

 const handleChange = (event, value) => {
  setPage(value);
  console.log(page)
 };

 return (
  <div className='search-results-main'>
   <h4 className='horizontal-list-title'>
    {params.searchresults}
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

   <div className='search-results'>
    {
     results.map(({ id, media_type, title, name, vote_average, poster_path }) => (
      <SearchResultItem
       key={id}
       id={id}
       title={media_type === 'movie' ? title : name}
       vote_average={vote_average}
       poster_path={poster_path}
       media_type={media_type}
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
}

export default SearchResults;