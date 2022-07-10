import './MovieDetail.scss';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useFetchDetail from '../Hooks/useFetchDetail';

const MovieDetail = () => {

 let params = useParams()

 const [results] = useFetchDetail('movie', params.movieid)

 return (
  <div className='main-container-movie-detail'>
   <div
    className='movie-detail-background'
   // style={{
   //  backgroundImage: `url(${`https://image.tmdb.org/t/p/w1280/${results[0].backdrop_path}`})`,
   //  // backgroundImage: `url(${externalImage})`,
   //  backgroundSize: 'cover',
   //  backgroundRepeat: 'no-repeat',
   //  backgroundPosition: '40% 50%',
   //  height: '80vh'
   // }}
   >
    <img src={`https://image.tmdb.org/t/p/w1280/${results.backdrop_path}`} />

   </div>

   <div className='details-links'>
    <ul>
     <li><Link to='moviedetailinfo' className='detail-link'>Info</Link></li>
     <li><Link to='moviedetailcast' className='detail-link'>Cast</Link></li>
     <li><Link to='moviedetailsimilar' className='detail-link'>Similar</Link></li>
    </ul>
   </div>
   <Outlet />

  </div>

 )

}

export default MovieDetail;