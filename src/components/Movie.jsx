import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

const Movie = ({movie}) => {

  const {addFavorite, user} = useContext(UserContext);

  const isfavorite = user?.favoriteMovies?.includes(movie.id);

  return (
    <div className="card">
      <img className='card-img-top' src={movie.url} alt={movie.title} />
      <div className="card-body">
        <h4>{movie.title}</h4>
        {user?
          <button onClick={ ()=> addFavorite(movie.id) } className= {`btn ${isfavorite ? `btn-success` : `btn-outline-primary`}`}>
            Favorite
          </button>
          :
          <></>
        }
        
      </div>
    </div>
  )
}

export default Movie