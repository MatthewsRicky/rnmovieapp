export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
  }
}
export const fetchMovies = async({ query }: {query: string}) => {
  const endpoint = '/discover/movie?sort_by=popularity.desc'

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: TMDB_CONFIG.headers,
  })

  if (!response.ok) {

    //@ts-ignore
    throw new Error('failed to fetch movies', response.statusText)
  }

  const data = await response.json();

  return data.results;
}


// const url = "https://api.themoviedb.org/3/authentication";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTJkMjEwYWRhZjUxMGRhYThkMzViNmUyNmZkNWIwYyIsIm5iZiI6MTczODA5NDQxNS43MzIsInN1YiI6IjY3OTkzNzRmYjk5ZDdlNzhjNzhmNDI2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zanNixomJtjx_7aywQ5pqNQypmh9UbwgoIUbzZUHYgs",
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));
