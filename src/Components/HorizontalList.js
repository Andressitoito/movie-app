import ItemList from './ItemList';
import './HorizontalList.scss';
import useFetchList from '../Hooks/useFetchList';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const HorizontalList = ({ list_title, category, type }) => {

 const [results, isLoading] = useFetchList(type, category, 1)


 return (
  <div className='list-container'>
   <Link to={`/showresults/${category}`}
    state={{
     type: type,
     category: category,
     list_title: list_title
    }}
    className='article-link'
   >
    <h4 className='horizontal-list-title'>
     {list_title}
    </h4>
    {
     isLoading &&
     <CircularProgress
      className='loader'
     />
    }
   </Link>
   <div className='list-items-container'>
    {
     results.map(({ id, title, name, vote_average, poster_path }) => (
      <ItemList
       key={id}
       id={id}
       title={type === 'movie' ? title : name}
       vote_average={vote_average}
       poster_path={poster_path}
       type={type}
      />
     ))
    }

   </div>



  </div>



 )
}

export default HorizontalList;