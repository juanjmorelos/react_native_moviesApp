import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'd53dd5c9e7a2eac4b7081861e06859f1',
        language: 'es'
    }
})