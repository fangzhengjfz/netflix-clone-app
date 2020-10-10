import React from "react";
import "./App.css";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />

      {/* Movie Lists */}
      <Row
        title="奈飞原创"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="当下流行" fetchUrl={requests.fetchTrending} />
      <Row title="评分最高" fetchUrl={requests.fetchTopRated} />
      <Row title="动作电影" fetchUrl={requests.fetchActionMovies} />
      <Row title="喜剧电影" fetchUrl={requests.fetchComedyMovies} />
      <Row title="惊悚电影" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="爱情电影" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
