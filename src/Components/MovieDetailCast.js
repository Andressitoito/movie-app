import './MovieDetailCast.scss';
import { Link, useParams } from 'react-router-dom';
import useFetchCast from '../Hooks/useFetchCast';
import img_not_found from '../images/img_not_found.png';

const MovieDetailCast = () => {

 const params = useParams()

 const [results, isLoading] = useFetchCast('movie', params.movieid, 'credits')

 return (
  <div className='detail-cast'>


   {
    isLoading && (
     <>


      {
       results.cast.map(actor => (
        <Link to={`/castprofile/${actor.id}`} className='Link'>
         <article>
          <div className='detail-cast-image-container'>
           <img
            /*         src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`} 
                     */
            src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
            onError={(e) => {
             if (e.target.src !== img_not_found) { e.target.onerror = null; e.target.src = img_not_found; }
            }}

            alt={actor.character} className='poster-image' />
          </div>
          <p className='title'>{actor.character}</p>
          <p className='title-name'>{actor.name}</p>
         </article>
        </Link>
       ))
      }


     </>
    )
   }


  </div>
 )
}

export default MovieDetailCast;