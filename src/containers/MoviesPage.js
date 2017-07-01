// ./src/containers/MoviesPage.js
import React from 'react';
import { connect } from 'react-redux';
import MoviesList from '../components/MoviesList';
import MoviesShow from './MoviesShow'

const MoviesPage = ({ movies }) =>
  <div>
    <MoviesList movies={movies} />
    <Switch>
      <Route path={`${match.url}/new`} component={MoviesNew} />
      <Route path={`${match.url}/:movieId`} component={MoviesShow} />
      <Route exact path={match.url} render={() => (
        <h3>Please select a Movie from the list.</h3>
      )} />
    </Switch>
  </div>;

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MoviesPage);
