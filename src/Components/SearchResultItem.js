import './SearchResultItem.scss';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import img_not_found from '../images/img_not_found.png';
import { definePath } from "../Utils/variables";

const SearchResultItem = ({ id, title, vote_average, poster_path, media_type }) => {

 const newRating = vote_average / 2

 return (
  <Link to={
   definePath(media_type, id)
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
   </article>
  </Link>
 )
}

export default SearchResultItem;