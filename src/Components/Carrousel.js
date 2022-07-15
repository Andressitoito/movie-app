import './Carrousel.scss';
import Carousel from 'react-bootstrap/Carousel'
import ItemList from './ItemList';
import useFetchList from '../Hooks/useFetchList';

const Carrousel = () => {

const [results, isLoading, totalPages] = useFetchList('movie', 'now_playing', 1)
console.log(results)

 return (
  <Carousel fade interval={5000} className='carrousel-main'>

   {
    results.map(({ id, title, vote_average, poster_path, backdrop_path }) => (
    

     <Carousel.Item 
     key={id}
     className='carrousel-item-container'
      style={{
       backgroundImage: `url(${`https://image.tmdb.org/t/p/w1280/${backdrop_path}`})`,
       // backgroundImage: `url(${externalImage})`,
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       backgroundPosition: '50% 20%',
       height: '500px',
      }}
     >
      {/*   <img
   className="d-block w-100 carrousel-image"
   src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
   alt="First slide"
  /> */}
      <Carousel.Caption className='carrousel-caption'>
       {/* <h3>{title}</h3> */}
      </Carousel.Caption>

      <div className='ItemList-positioning'>
       <ItemList
        key={id}
        id={id}
        title={title}
        vote_average={vote_average}
        poster_path={poster_path}
        type={'movie'}
       />
      </div>
     </Carousel.Item>
    ))
   }
  </Carousel>
 )

}

export default Carrousel;