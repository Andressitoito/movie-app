import './NotFound404.scss';
import img_not_found from '../images/img_not_found.png'

const NotFound404 = () => {
 return (
  <div className='not-found'>
   404 NOT FOUND

   <img src={img_not_found}/>
  </div>
 )
}

export default NotFound404;