"use client";

import { useEffect, useState } from "react";
import "../scss/index.scss";
import axios from "axios";
import MovieCard from "../MovieCard";
import { Movie } from "@/types/movie";

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "6a7ebe56dcfa9eab891cb2fe34ed0a34",
        language: "pt-BR",
      },
    })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };

  return (
    <ul className="movieList">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
