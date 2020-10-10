const API_KEY = "49981ba800c64530724be19445a40737";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=zh-CN`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=zh-CN`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&language=zh-CN&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&language=zh-CN&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&language=zh-CN&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&language=zh-CN&with_genres=10749`,
};

export default requests;
