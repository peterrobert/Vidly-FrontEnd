import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Movie from "../components/MovieComponent";
import { deleteMovie } from "../services/fakeMovieService";
class MovieContainer extends Component {
  constructor() {
      super();
      this.displayMovies = this.displayMovies.bind(this)
      this.deleteMovies = this.deleteMovies.bind(this)
  }

  state = {
      movies: getMovies()
  };


  deleteMovies (id) {
   deleteMovie(id);
      this.setState({
          movies: getMovies()
      })
  }

  displayMovies() {
      const{movies} = this.state
      const results = movies.map((value, idx) => {
         return(
             <Movie key={idx}  title ={ value.title} genre = {value.genre.name} stock = {value.numberInStock} rate = {value.dailyRentalRate} id = {value._id} removeMovie ={this.deleteMovies}/>
         )  
      })
      return results
  }

  render() {
    return (
       <>
       {this.state.movies.length === 0 && 'There are no movies at this moment'}
      <table>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>rate</th>
          <th>remove</th>
        </tr>
         {this.displayMovies()}
      </table>
      </>
    );
  }
}

export default MovieContainer;
