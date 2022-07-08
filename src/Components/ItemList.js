import './ItemList.scss';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import img_not_found from '../images/img_not_found.png';

const ItemList = ({ id, title, vote_average, poster_path, type }) => {

 const newRating = vote_average / 2

 return (
  <Link to={
   type === 'movie'
    ? `/popularmovies/${id}/moviedetailinfo`
    : `/popularseries/${id}/seriedetailinfo`
  } className='article-link'>
   <article>
    <div className='detail-cast-image-container'>
     <img
      src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
      onError={(e) => {
       if (e.target.src !== img_not_found) { e.target.onerror = null; e.target.src = img_not_found; }
      }}
      alt={title} className='poster-image' />
    </div>

    <span className='rating'>
     <Rating
      name="half-rating-read"
      value={
       newRating > 0
       ? newRating
       : .5
      }
      precision={0.25}
      readOnly />
    </span>
    <h4 className='title'>{title}</h4>
    {/*       <div className='detail-overlay'>
        <p>you might not be able to connect through the ip that npm run start writes in the cmd, try your other ip addresses too. as other friends mentioned, open cmd, type in: ipconfig and press Enter, then you'll see 3 parts that all have one line with: IPv4 Address, try all these ip addresses with the port number of your react application, i hope it helps  </p>
      </div> */}
   </article>
  </Link>
 )
}

export default ItemList;