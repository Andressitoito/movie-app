import './SerieDetailCast.scss';
import { Link, useParams } from 'react-router-dom';

const SerieDetailCast = ({movie_id}) => {

const params = useParams()
console.log(params)

 const cast = {
  "id": 338953,
  "cast": [
   {
    "adult": false,
    "gender": 2,
    "id": 37632,
    "known_for_department": "Acting",
    "name": "Eddie Redmayne",
    "original_name": "Eddie Redmayne",
    "popularity": 46.831,
    "profile_path": "/fSvG7qzoBBnJUmgtIuMgrK3EQPN.jpg",
    "cast_id": 0,
    "character": "Newt Scamander",
    "credit_id": "582daf0592514153b700202e",
    "order": 0
   },
   {
    "adult": false,
    "gender": 2,
    "id": 9642,
    "known_for_department": "Acting",
    "name": "Jude Law",
    "original_name": "Jude Law",
    "popularity": 57.764,
    "profile_path": "/A6Y0m7qEe04ZTHKyYDLbnyCHNzn.jpg",
    "cast_id": 7,
    "character": "Albus Dumbledore",
    "credit_id": "5dc0d0a6470ead0018898e8f",
    "order": 1
   },
   {
    "adult": false,
    "gender": 2,
    "id": 1019,
    "known_for_department": "Acting",
    "name": "Mads Mikkelsen",
    "original_name": "Mads Mikkelsen",
    "popularity": 80.659,
    "profile_path": "/ntwPvV4GKGGHO3I7LcHMwhXfsw9.jpg",
    "cast_id": 23,
    "character": "Gellert Grindelwald",
    "credit_id": "5fbefbbb6bdec3003b245a5f",
    "order": 2
   },
   {
    "adult": false,
    "gender": 3,
    "id": 132157,
    "known_for_department": "Acting",
    "name": "Ezra Miller",
    "original_name": "Ezra Miller",
    "popularity": 60.981,
    "profile_path": "/6wmTpbYpmhthaxzM5ss3377F9IV.jpg",
    "cast_id": 8,
    "character": "Credence Barebone / Aurelius Dumbledore",
    "credit_id": "5dc0d101470ead001389ad4a",
    "order": 3
   },
   {
    "adult": false,
    "gender": 2,
    "id": 58873,
    "known_for_department": "Acting",
    "name": "Dan Fogler",
    "original_name": "Dan Fogler",
    "popularity": 23.753,
    "profile_path": "/zJWbLEjfbDthBMucq9M6L4GJXL3.jpg",
    "cast_id": 10,
    "character": "Jacob Kowalski",
    "credit_id": "5dc0d1e99d89390018317616",
    "order": 4
   },
   {
    "adult": false,
    "gender": 2,
    "id": 37632,
    "known_for_department": "Acting",
    "name": "Eddie Redmayne",
    "original_name": "Eddie Redmayne",
    "popularity": 46.831,
    "profile_path": "/fSvG7qzoBBnJUmgtIuMgrK3EQPN.jpg",
    "cast_id": 0,
    "character": "Newt Scamander",
    "credit_id": "582daf0592514153b700202e",
    "order": 0
   },
   {
    "adult": false,
    "gender": 2,
    "id": 9642,
    "known_for_department": "Acting",
    "name": "Jude Law",
    "original_name": "Jude Law",
    "popularity": 57.764,
    "profile_path": "/A6Y0m7qEe04ZTHKyYDLbnyCHNzn.jpg",
    "cast_id": 7,
    "character": "Albus Dumbledore",
    "credit_id": "5dc0d0a6470ead0018898e8f",
    "order": 1
   },
   {
    "adult": false,
    "gender": 2,
    "id": 1019,
    "known_for_department": "Acting",
    "name": "Mads Mikkelsen",
    "original_name": "Mads Mikkelsen",
    "popularity": 80.659,
    "profile_path": "/ntwPvV4GKGGHO3I7LcHMwhXfsw9.jpg",
    "cast_id": 23,
    "character": "Gellert Grindelwald",
    "credit_id": "5fbefbbb6bdec3003b245a5f",
    "order": 2
   },
   {
    "adult": false,
    "gender": 3,
    "id": 132157,
    "known_for_department": "Acting",
    "name": "Ezra Miller",
    "original_name": "Ezra Miller",
    "popularity": 60.981,
    "profile_path": "/6wmTpbYpmhthaxzM5ss3377F9IV.jpg",
    "cast_id": 8,
    "character": "Credence Barebone / Aurelius Dumbledore",
    "credit_id": "5dc0d101470ead001389ad4a",
    "order": 3
   },
   {
    "adult": false,
    "gender": 2,
    "id": 58873,
    "known_for_department": "Acting",
    "name": "Dan Fogler",
    "original_name": "Dan Fogler",
    "popularity": 23.753,
    "profile_path": "/zJWbLEjfbDthBMucq9M6L4GJXL3.jpg",
    "cast_id": 10,
    "character": "Jacob Kowalski",
    "credit_id": "5dc0d1e99d89390018317616",
    "order": 4
   }
  ]
 }
 return (
  <div className='detail-cast'>

   {
    cast.cast.map(actor => (
     <Link to={`/popularmovies/${params.movieid}/castprofile/${actor.id}`} className='Link'>
      <article>
       <div className='detail-cast-image-container'>
       <img src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`} alt={actor.character} className='poster-image' />
       </div>
       <p className='title'>{actor.character}</p>
       <p className='title-name'>{actor.name}</p>
      </article>
     </Link>
    ))
   }
  </div>
 )
}

export default SerieDetailCast;