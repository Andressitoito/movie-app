import './SerieDetail.scss';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useFetchDetail from '../Hooks/useFetchDetail';

const SerieDetail = () => {

 let params = useParams()

const [results] = useFetchDetail('tv', params.serieid)

 return (
  <div className='main-container-serie-detail'>
   <div
    className='serie-detail-background'
   >
    <img src={`https://image.tmdb.org/t/p/w1280/${results.backdrop_path}`} />

   </div>

   <div className='details-links'>
    <ul>
     <li><Link to='seriedetailinfo' className='detail-link'>Info</Link></li>
     <li><Link to='seriedetailcast' className='detail-link'>Cast</Link></li>
     <li><Link to='seriedetailsimilar' className='detail-link'>Similar</Link></li>
    </ul>
   </div>
   <Outlet />

  </div>

 )

}

export default SerieDetail;