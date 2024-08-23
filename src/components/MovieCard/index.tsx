import { Movie } from "@/types/movie";
import Star from "../Star";

export interface Props {
  movie: Movie;
}

export default function MovieCard(props: Props) {
  const { movie } = props;

  return (
    <li className="movieCard">

      <div  className="bannerMovie">
        <img className="poster"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="movieInfo">
        <h2 className="title">{movie.title}</h2>
        
        <Star 
          rating={movie.vote_average}
        />

        <div className="hiddenContent">
          <p className="description">{movie.overview}</p>
          <button className="btn">Ver mais</button>
        </div>
      </div>

    </li>
  );
}
