import './ItemList.scss'
  
const ItemList = ({id, title, vote_average, poster_path}) => {
  return (
    
    <article>
      <img src={`https://image.tmdb.org/t/p/w185/${poster_path}`} alt={title} className='poster-image'/>
      <span className='type'>Pelicula/Serie</span>
      <span className='rating'>{vote_average}</span>
      <h4 className='title'>{title}</h4>
{/*       <div className='detail-overlay'>
        <p>you might not be able to connect through the ip that npm run start writes in the cmd, try your other ip addresses too. as other friends mentioned, open cmd, type in: ipconfig and press Enter, then you'll see 3 parts that all have one line with: IPv4 Address, try all these ip addresses with the port number of your react application, i hope it helps  </p>
      </div> */}
    </article>
  )
}
  
export default ItemList;