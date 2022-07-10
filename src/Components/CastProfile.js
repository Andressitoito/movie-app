import { useParams } from 'react-router-dom';
import './CastProfile.scss'
import useFetchDetail from '../Hooks/useFetchDetail';

const CastProfile = () => {

 const params = useParams()

 const [results, isLoading] = useFetchDetail('person', params.profileid)

 return (
  <div className='profile-container'>

   {
    isLoading && (
     <>


      <div className='profile-container-image'>

       <img src={`https://image.tmdb.org/t/p/w300/${results.profile_path}`} alt='' className='movie-image' />

      </div>
      <div className='profile-container-description'>

       <h3>{results.name}</h3>
       <p className='profile-birthday'>{results.birthday}</p>
       <p>{results.place_of_birth} </p>

       <p>{results.biography}</p>

       {
        results.homepage !== null &&

        <a href={`${results.homepage}`} target="_blank" >Web Site</a>

       }
      </div>


     </>
    )
   }


  </div>
 )
}

export default CastProfile;