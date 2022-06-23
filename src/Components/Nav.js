import './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav >
      <ul>
        <li><Link to='/' className='link'>Home</Link></li>
        <li><Link to='/popularmovies' className='link'>Movies</Link></li>
        <li><Link to='/popularseries' className='link'>Series</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;