import React, { useEffect, useState } from 'react'
import { Movie } from '../../core/entities/movie.entity'
import * as UseCases from '../../core/use-cases'
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter'

let popularPage = 1

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
    const [popular, setPopular] = useState<Movie[]>([])
    const [topRated, setTopRated] = useState<Movie[]>([])
    const [upcoming, setUpcoming] = useState<Movie[]>([])

    useEffect(() => {
        initialLoad()
    }, [])

    const initialLoad = async () => {
        const nowPlayinMoviesPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher)
        const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher)
        const topRatedPromise = UseCases.moviesTopRatedCase(movieDBFetcher)
        const upcomingPromise = UseCases.moviesUpcomingCase(movieDBFetcher)

        const [
            nowPlayingMovies,
            popular,
            topRated,
            upcoming
        ] = await Promise.all([
            nowPlayinMoviesPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise,
        ])

        setNowPlaying(nowPlayingMovies)
        setPopular(popular)
        setTopRated(topRated)
        setUpcoming(upcoming)

        setIsLoading(false)
    }

    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming,

        //
        popularNextPage: async () => {
            popularPage++
            const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {
                page: popularPage
            })
            setPopular(prev => [...prev, ...popularMovies])
        },
        topRatedNextPage: async () => {
            popularPage++
            const popularMovies = await UseCases.moviesTopRatedCase(movieDBFetcher, {
                page: popularPage
            })
            setTopRated(prev => [...prev, ...popularMovies])
        },
        upcomingNextPage: async () => {
            popularPage++
            const popularMovies = await UseCases.moviesUpcomingCase(movieDBFetcher, {
                page: popularPage
            })
            setUpcoming(prev => [...prev, ...popularMovies])
        }
    }
}