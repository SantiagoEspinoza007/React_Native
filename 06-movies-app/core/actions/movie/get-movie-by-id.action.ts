import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieByIdAction = async (id: number | string): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);

    console.log("Pelicula - HTTP cargada");    

    return MovieMapper.fromTheMoviDBCompleteMovie(data);    
  } catch (error) {
    console.error("Error fetching movies details:", error);
    throw new Error("Failed to fetch movies details");
  }
};
