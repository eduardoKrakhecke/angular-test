import { Injectable } from '@angular/core';
import { environment } from "@environments/environment";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

import { StudiosResponse } from "@app/pages/dashboard/model/studio";
import { MultipleWinnersResponse } from "@app/pages/dashboard/model/multiple-winners";
import { IntervalWinnerResponse } from "@app/pages/dashboard/model/interval-winner";
import { Movie } from "@app/pages/list-movies/list-movies/model/movie";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  BASE_URL = environment.BASE_URL

  constructor(private http: HttpClient) { }

  getStudios(): Observable<StudiosResponse> {
    return this.http.get<StudiosResponse>(`${this.BASE_URL}?projection=studios-with-win-count`).pipe(
      map((response: StudiosResponse) => {
        return response
      })
    )
  }

  getMultipleWinners(): Observable<MultipleWinnersResponse> {
    return this.http.get<MultipleWinnersResponse>(`${this.BASE_URL}?projection=years-with-multiple-winners`).pipe(
      map((response: MultipleWinnersResponse) => {
        return response
      })
    )
  }

  getIntervalWinner(): Observable<IntervalWinnerResponse> {
    return this.http.get<IntervalWinnerResponse>(`${this.BASE_URL}?projection=max-min-win-interval-for-producers`).pipe(
      map((response: IntervalWinnerResponse) => {
        return response
      })
    )
  }

  getMovieByYear(year: number | null): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.BASE_URL}?winner=true&year=${year}`).pipe(
      map((response: Movie[]) => {
        return response
      })
    )
  }
}
