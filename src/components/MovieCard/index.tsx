import { Movie } from "@/types";
export interface Props{
  movie: Movie;
}

export default function MovieCard(props: Props) {
  const movie = props.movie;
  return (
    <li className="movieItem">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt=""
      />
      <h2 className="title">{movie.title}</h2>
      <p className="description">{movie.overview}</p>
      <p className="description">{movie.vote_average}</p>
    </li>
  );
}
