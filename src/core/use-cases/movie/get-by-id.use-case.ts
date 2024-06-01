import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { FullMovie } from "../../entities/movie.entity";

export const getMovieByIdUseCase = async (fetchert: HttpAdapter, movieId: number): Promise<FullMovie> {
    try {
        
    } catch (error) {
        throw new Error(`Cannot get movie by id: ${movieId}`)
    }
}