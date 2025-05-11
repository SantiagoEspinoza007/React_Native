import { Movie } from "../interfaces/movie.interface";
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
}
