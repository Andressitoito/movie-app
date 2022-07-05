import { useParams } from 'react-router-dom';
import './CastProfile.scss'

const CastProfile = () => {

 const params = useParams()


 const results = [
  {
   "adult": false,
   "also_known_as": [
    "אדי רדמיין",
    "에디 레드메인",
    "ედი რედმეინი",
    "埃迪·雷德梅尼"
   ],
   "biography": "Edward John David Redmayne OBE (born 6 January 1982) is an English actor and model. He is the recipient of various accolades, including an Academy Award, a Tony Award, a Golden Globe Award, a Screen Actors Guild Award, and a British Academy Film Award.\n\nHe began his professional acting career in West End theatre before making his screen debut in 1996 with guest television appearances. His first films were Like Minds (2006), The Good Shepherd (2006) and Elizabeth: The Golden Age (2007). On the stage, Redmayne starred in the productions of Red from 2009 to 2010 and Richard II from 2011 to 2012. The former won him the Tony Award for Best Featured Actor in a Play.\n\nRedmayne's film breakthrough came with the roles of Colin Clark in the biographical drama My Week with Marilyn (2011) and Marius Pontmercy in Tom Hooper's musical Les Misérables (2012). He garnered consecutive nominations for the Academy Award for Best Actor for his portrayals of physicist Stephen Hawking in The Theory of Everything (2014), and transgender artist Lili Elbe in The Danish Girl (2015), winning for the former. In 2016, he began starring as Newt Scamander in the Fantastic Beasts film series.",
   "birthday": "1982-01-06",
   "deathday": null,
   "gender": 2,
   "homepage": "http://eddie-redmayne.net/",
   "id": 37632,
   "imdb_id": "nm1519666",
   "known_for_department": "Acting",
   "name": "Eddie Redmayne",
   "place_of_birth": "London, England, UK",
   "popularity": 46.831,
   "profile_path": "/fSvG7qzoBBnJUmgtIuMgrK3EQPN.jpg"
  }
 ]

 return (
  <div className='profile-container'>

   <div className='profile-container-image'>

    <img src={`https://image.tmdb.org/t/p/w300/${results[0].profile_path}`} alt='' className='movie-image' />

   </div>
   <div className='profile-container-description'>

    <h3>{results[0].name}</h3>
    <p>{results[0].birthday} <p>{results[0].place_of_birth}</p></p>
    <p>{results[0].biography}</p>

    <a href={`${results[0].homepage}`} target="_blank" >Web Site</a>

   </div>
  </div>
 )
}

export default CastProfile;