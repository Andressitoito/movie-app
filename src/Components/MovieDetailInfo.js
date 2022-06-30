import './MovieDetailInfo.scss'

const MovieDetailInfo = () => {


 const results = [
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
  <div className='details-container'>

   <div className='details-container-image'>

    <img src={`https://image.tmdb.org/t/p/w300/${results[0].poster_path}`} alt='' className='movie-image' />

   </div>
   <div className='details-container-description'>

    <h3 className='details-title'>{results[0].original_title}</h3>
    <p className='details-rating'>{results[0].vote_average}</p>
    <p className='details-description'>{results[0].overview}</p>
    <p className='details-rating'>Duration: {results[0].overview}</p>
    <p className='details-rating'>{results[0].overview}</p>
    <p className='details-rating'>{results[0].overview}</p>

   </div>
  </div>
 )
}

export default MovieDetailInfo;