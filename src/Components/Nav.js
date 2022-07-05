import './Nav.scss';
import { Link, useNavigate } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Nav = () => {

 const navigate = useNavigate()


 const handleClickSearch = () => {

 }


 return (
  <nav >
   <ul>
    <li><Link to='/' className='btn btn-custom'>Home</Link></li>
    <li><Link to='/popularmovies' className='btn btn-custom'>Movies</Link></li>
    <li><Link to='/popularseries' className='btn btn-custom'>Series</Link></li>
    <li className='input-search-wrap'>
<form
     <InputBase
      sx={{
       ml: 1,
       flex: 1,
      }}
      className='input-search'
      placeholder="Search Movies"
      inputProps={{ 'aria-label': 'search movies' }}
     />
     <Link to='/search'>
      <IconButton
       type="submit"
       sx={{
        p: '7px',
        borderRadius: '4px',
       }}
       onClick={handleClickSearch}
       className='input-icon'
       aria-label="search">
       <SearchIcon />
      </IconButton>
     </Link>
    </li>
   </ul>
  </nav>
 )
}

export default Nav;