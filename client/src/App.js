import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('/movies')
      .then(res => res.json())
      .then(data =>  setMovies(data))
  }, [])

  return (
     <div>
      <h2>Hello from react!</h2>
      <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>{movie.title}</li>
        )
      })}
      </ul>
     
     </div>
  )
}

export default App;
