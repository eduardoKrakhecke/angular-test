import { Movie } from "@app/pages/list-movies/list-movies/model/movie";

export class MovieResponse {
  content: Movie[];
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
}
