import './MovieDetailInfo.scss';
import Rating from '@mui/material/Rating';

const MovieDetailInfo = () => {


 const results = [
  {
   "adult": false,
   "backdrop_path": "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
   "belongs_to_collection": {
    "id": 435259,
    "name": "Fantastic Beasts Collection",
    "poster_path": "/oqLzqCb2old88cVuXS0SGMHkP7Z.jpg",
    "backdrop_path": "/2Iripuf9j5vbROHNpkUUiWIIDxE.jpg"
   },
   "budget": 200000000,
   "genres": [
    {
     "id": 14,
     "name": "Fantasy"
    },
    {
     "id": 12,
     "name": "Adventure"
    },
    {
     "id": 28,
     "name": "Action"
    }
   ],
   "homepage": "https://www.fantasticbeasts.com",
   "id": 338953,
   "imdb_id": "tt4123432",
   "original_language": "en",
   "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
   "overview": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
   "popularity": 3038.294,
   "poster_path": "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
   "production_companies": [
    {
     "id": 174,
     "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
     "name": "Warner Bros. Pictures",
     "origin_country": "US"
    },
    {
     "id": 437,
     "logo_path": "/nu20mtwbEIhUNnQ5NXVhHsNknZj.png",
     "name": "Heyday Films",
     "origin_country": "GB"
    }
   ],
   "production_countries": [
    {
     "iso_3166_1": "GB",
     "name": "United Kingdom"
    },
    {
     "iso_3166_1": "US",
     "name": "United States of America"
    }
   ],
   "release_date": "2022-04-06",
   "revenue": 400000000,
   "runtime": 142,
   "spoken_languages": [
    {
     "english_name": "English",
     "iso_639_1": "en",
     "name": "English"
    }
   ],
   "status": "Released",
   "tagline": "Return to the magic.",
   "title": "Fantastic Beasts: The Secrets of Dumbledore",
   "video": false,
   "vote_average": 6.8,
   "vote_count": 2072
  }
 ]

 const movie_genres = results[0].genres


 return (
  <div className='details-container'>

   <div className='details-container-image'>

    <img src={`https://image.tmdb.org/t/p/w300/${results[0].poster_path}`} alt='' className='movie-image' />

   </div>
   <div className='details-container-description'>

    <h3 className='details-title'>{results[0].original_title}</h3>

    <p className='details-rating'> <Rating name="half-rating-read" max={10} value={results[0].vote_average} precision={0.25} readOnly /></p>
    <p className='details-misc'>{results[0].overview}</p>
    <p className='details-misc'>Duration: <span>
     {results[0].runtime} min</span></p>
    <p className='details-misc'>Budget: ${results[0].budget}</p>
    <p className='details-misc'>Revenue: ${results[0].revenue}</p>
    <p className='details-misc'>Genres:
     {
      movie_genres.map(genre => (
       <span> {genre.name} </span>
      ))
     }
    </p>

   </div>
  </div>
 )
}

export default MovieDetailInfo;