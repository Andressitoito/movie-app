import './Carrousel.scss';
import Carousel from 'react-bootstrap/Carousel'

const Carrousel = () => {


 return (
  <Carousel fade interval={5000} className='carrousel-main'>
   <Carousel.Item className='image-container'>
    <img
     className="d-block w-100 carrousel-image"
     src="https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
     alt="First slide"
    />
    <Carousel.Caption className='carrousel-caption'>
     <h3>First slide label</h3>
     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item className='image-container'>
    <img
     className="d-block w-100 carrousel-image"
     src="https://picsum.photos/500/300"
     alt="second slide"
    />


    <Carousel.Caption className='carrousel-caption'>
     <h3>Second slide label</h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item className='image-container'>
    <img
     className="d-block w-100 carrousel-image"
     src="https://picsum.photos/600/300"
     alt="Third slide"
    />

    <Carousel.Caption className='carrousel-caption'>
     <h3>Third slide label</h3>
     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
   </Carousel.Item>
  </Carousel>
 )
}

export default Carrousel;