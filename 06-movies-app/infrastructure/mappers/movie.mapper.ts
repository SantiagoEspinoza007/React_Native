import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { MovieDBMovieResponse } from "../interfaces/moviedb-movie.response";
import { Result } from "../interfaces/moviedb-response";

export class MovieMapper {
  static fromThemoviDBResponseToMovie = (movies: Result): Movie => {
    return {
      id: movies.id,
      title: movies.title,
      description: movies.overview,
      realeaseDate: new Date(movies.release_date),
      poster: `https://image.tmdb.org/t/p/w500${movies.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movies.backdrop_path}`,
      rating: movies.vote_average,
    };
  };

  static fromTheMoviDBCompleteMovie = (movie: MovieDBMovieResponse): CompleteMovie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      realeaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      rating: movie.vote_average,
      genres: movie.genres.map((genre) => genre.name),
      duration: movie.runtime,
      budget: movie.budget,
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map((company) => company.name),
    }
  };
}
