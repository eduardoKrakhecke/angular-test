import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from "@environments/environment";
import { MovieResponse } from "@app/pages/list-movies/list-movies/model/movie";


@Injectable({
  providedIn: 'root'
})
export class ListMoviesService {

  BASE_URL = environment.BASE_URL

  constructor(private http: HttpClient) { }

  getMovies(page: number, size: number, winner?: boolean, year?: number): Observable<MovieResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (winner !== null && winner !== undefined) {
      params = params.set('winner', winner.toString());
    }
    if (year !== null && year !== undefined) {
      params = params.set('year', year.toString());
    }

    return this.http.get<MovieResponse>(this.BASE_URL, { params }).pipe(
      map((response: MovieResponse) => {
        return response;
      })
    );
  }
}
