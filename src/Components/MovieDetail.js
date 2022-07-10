import './MovieDetail.scss';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useFetchDetail from '../Hooks/useFetchDetail';

const MovieDetail = () => {

 let params = useParams()

 const [results] = useFetchDetail('movie', params.movieid)

 const resultes = [
  {
   "adult": false,
   "backdrop_path": "/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
   "genre_ids": [
    14,
    28,
    12
   ],
   "id": 453395,
   "original_language": "en",
   "original_title": "Doctor Strange in the Multiverse of Madness",
   "overview": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
   "popularity": 3901.541,
   "poster_path": "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
   "release_date": "2022-05-04",
   "title": "Doctor Strange in the Multiverse of Madness",
   "video": false,
   "vote_average": 7.5,
   "vote_count": 2439
  }
 ]

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