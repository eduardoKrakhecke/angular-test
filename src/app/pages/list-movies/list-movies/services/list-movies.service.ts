import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from "@environments/environment";
import { MovieResponse } from "@app/pages/list-movies/list-movies/model/movie-response";

@Injectable({
  providedIn: 'root'
})
export class ListMoviesService {

  BASE_URL = environment.BASE_URL

  constructor(private http: HttpClient) { }

  getMovies(page: number, size: number, winner: boolean, year?: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.BASE_URL}?page=${page}&size=${size}&winner=${winner}`).pipe(
      map((response: MovieResponse) => {
        return response
      })
    )
  }
}
