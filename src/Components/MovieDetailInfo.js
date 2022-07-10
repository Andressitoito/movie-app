import './MovieDetailInfo.scss';
import Rating from '@mui/material/Rating';
import { useParams } from 'react-router-dom';
import useFetchDetail from '../Hooks/useFetchDetail';

const MovieDetailInfo = () => {

 let params = useParams()

 const [results, isLoading] = useFetchDetail('movie', params.movieid)

 let movie_genres = results.genres

 return (
  <div className='details-container'>

   <div className='details-container-image'>

    <img src={`https://image.tmdb.org/t/p/w300/${results.poster_path}`} alt='' className='movie-image' />

   </div>

   {
    isLoading && (
     <>
      <div className='details-container-description'>

       <h3 className='details-title'>{results.original_title}</h3>

       <p className='details-rating'> <Rating name="half-rating-read" max={10} value={results.vote_average} precision={0.25} readOnly />
       </p>

       <p className='details-misc'>{results.overview}</p>
       <p >Duration: <span className='details-misc'>
        {results.runtime} min</span></p>
       <p >Budget: <span className='details-misc'>
        ${results.budget}
       </span>
       </p>
       <p >Revenue:<span className='details-misc'> ${results.revenue}</span></p>
       <p >Genres:
        {
         isLoading && (
          movie_genres.map((genre, index) => (
           <span key={index} className='details-misc'> {genre.name} </span>
          ))
         )
        }

       </p>

      </div>


     </>
    )
   }


  </div>
 )
}

export default MovieDetailInfo;