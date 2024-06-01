import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { Options } from "../../../infrastructure/interfaces/movie-db.options";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const moviesUpcomingCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
    try {
        const upconming = await fetcher.get<MovieDBMoviesResponse>('/upcoming', {
            params: {
                page: options?.page ?? 1
            }
        })
        return upconming.results.map(MovieMapper.fromMovieDBResultToEntity)
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - Upcoming')
    }
}