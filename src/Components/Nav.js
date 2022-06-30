import './Nav.scss';
import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
  return (
    <nav >
      <ul>
        <li><Link to='/' className='btn btn-custom'>Home</Link></li>
        <li><Link to='/popularmovies' className='btn btn-custom'>Movies</Link></li>
        <li><Link to='/popularseries' className='btn btn-custom'>Series</Link></li>
      </ul>
      {/* <Outlet/> */}
    </nav>
  )
}

export default Nav;