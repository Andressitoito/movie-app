import './SerieDetailInfo.scss';
import Rating from '@mui/material/Rating';
import { useParams } from 'react-router-dom';
import useFetchDetail from '../Hooks/useFetchDetail';

const SerieDetailInfo = () => {

 let params = useParams()

 const [results, isLoading] = useFetchDetail('tv', params.serieid)

 const movie_genres = results.genres

 return (

  <div className='serie-details-container'>

   <div className='serie-details-container-image'>

    <img src={`https://image.tmdb.org/t/p/w300/${results.poster_path}`} alt='' className='movie-image' />

   </div>

   {
    isLoading && (
     <>

      <div className='serie-details-container-description'>

       <h3 className='serie-details-title'>{results.name}</h3>

       <p className='tagline'>{results.tagline}</p>
       <p className='serie-details-rating'> <Rating name="half-rating-read" max={10} value={results.vote_average} precision={0.25} readOnly /></p>
       <p className='serie-details-misc'>{results.overview}</p>
       <p >Episode RunTime:   <span className='serie-details-misc'>
        {results.episode_run_time} min</span></p>
       <p >Episodes: <span className='serie-details-misc'>
        {results.number_of_episodes}
       </span>
       </p>
       <p >Seasons: <span className='serie-details-misc'>
        {results.number_of_seasons}
       </span> </p>
       <p >Genres:
        {
         movie_genres.map((genre,index) => (
          <span key={index} className='serie-details-misc'> {genre.name} </span>
         ))
        }
       </p>

      </div>

     </>
    )
   }

  </div>
 )
}

export default SerieDetailInfo;