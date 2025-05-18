import { movieApi } from "@/core/api/movie-api";
import { CreditsResponse } from "@/infrastructure/interfaces/credits-response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastAction = async (id: number | string) => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${id}/credits`);

    console.log("Credits - HTTP cargado"); 
    console.log(JSON.stringify(data, null, 2)); // Log the entire data object for debugging

    // return CastMapper.fromMovieDBCastToEntity(data.cast);
    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.error("Error fetching credits details:", error);
    throw new Error("Failed to fetch credits details");
  }
};
