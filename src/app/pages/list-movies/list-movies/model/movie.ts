export interface Movie {
  id: number;
  year: number;
  title: string;
  studios: string[];
  producers: string[];
  winner: boolean;
}

export interface MovieResponse {
  content: Movie[];
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
}
