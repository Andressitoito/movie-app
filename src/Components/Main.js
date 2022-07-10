import HorizontalList from './HorizontalList';
import Carrousel from './Carrousel';
import './Main.scss';

const Main = () => {

 return (
  <section className='main-container'>

   <div className='carrousel-container'>
    <Carrousel />
   </div>

   <HorizontalList
    list_title={'Popular movies'}
    category={'popular'}
    type={'movie'}
   />
   <HorizontalList
    list_title={'popular series'}
    category={'popular'}
    type={'tv'}
   />

  </section >
 )
}

export default Main;