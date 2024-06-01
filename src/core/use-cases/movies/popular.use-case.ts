import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { Options } from "../../../infrastructure/interfaces/movie-db.options";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
    try {
        const popular = await fetcher.get<MovieDBMoviesResponse>('/popular', {
            params: {
                page: options?.page ?? 1
            }
        })
        return popular.results.map(MovieMapper.fromMovieDBResultToEntity)
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - Popular')
    }
}