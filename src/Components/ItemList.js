import './ItemList.scss';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

const ItemList = ({ id, title, vote_average, poster_path, type }) => {

 const newRating = vote_average / 2

 return (
  <Link to={`/popularmovies/${id}/moviedetailinfo`} className='article-link'>
   <article>
    <img src={`https://image.tmdb.org/t/p/w185/${poster_path}`} alt={title} className='poster-image' />
    {/* <span className='type'>{type}</span> */}

    <span className='rating'> <Rating name="half-rating-read" value={newRating} precision={0.25} readOnly /></span>
    <h4 className='title'>{title}</h4>
    {/*       <div className='detail-overlay'>
        <p>you might not be able to connect through the ip that npm run start writes in the cmd, try your other ip addresses too. as other friends mentioned, open cmd, type in: ipconfig and press Enter, then you'll see 3 parts that all have one line with: IPv4 Address, try all these ip addresses with the port number of your react application, i hope it helps  </p>
      </div> */}
   </article>
  </Link>
 )
}

export default ItemList;