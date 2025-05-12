import { movieApi } from "@/core/api/movie-api";
import { MoviesDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";


export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MoviesDBMoviesResponse>("/now_playing");

    // console.log("Now Playing Movies:", JSON.stringify(data, null, 2));
    
    const movies = data.results.map( MovieMapper.fromThemoviDBResponseToMovie);

    // console.log("Mapped Movies:", JSON.stringify(movies, null, 2));

    return movies;
  } catch (error) {
    console.error("Error fetching now playing movies:", error);
    throw new Error("Failed to fetch now playing movies");
  }
};
