import './ShowResults.scss';
import { useLocation } from 'react-router-dom';
import useFetchList from '../Hooks/useFetchList';
import ItemList from './ItemList';

const ShowResults = () => {

 const location = useLocation()
 const data = location.state

 const { type, category, list_title } = data

 const [results, isLoading, totalPages] = useFetchList(type, category)

 return (
  <div className='show-results-main'>
   <h4 className='horizontal-list-title'>
    {list_title}
   </h4>
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
  </div>
 )
}

export default ShowResults;