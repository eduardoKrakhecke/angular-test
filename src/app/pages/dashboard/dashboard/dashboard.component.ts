import { Component } from '@angular/core';
import { DashboardService } from "@app/pages/dashboard/services/dashboard.service";
import { Studio, StudiosResponse } from "@app/pages/dashboard/model/studio";
import { MultipleWinners, MultipleWinnersResponse } from "@app/pages/dashboard/model/multiple-winners";
import { IntervalWinner, IntervalWinnerResponse } from "@app/pages/dashboard/model/interval-winner";
import { Movie } from "@app/pages/list-movies/list-movies/model/movie";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  movies: Movie[] = []
  studios: Studio[] = []
  multipleWinners: MultipleWinners[] = []
  intervalWinnersMax: IntervalWinner[] = []
  intervalWinnersMin: IntervalWinner[] = []
  searchText: number | null = null

  columnsStudios = [
    { field: 'name', header: 'Name' },
    { field: 'winCount', header: 'Win Count' },
  ];

  columnsMultipleWinners = [
    { field: 'year', header: 'Year' },
    { field: 'winnerCount', header: 'Win Count' },
  ]

  columnsIntervalWinners = [
    { field: 'producer', header: 'Producer' },
    { field: 'interval', header: 'Interval' },
    { field: 'previousWin', header: 'Previous Year' },
    { field: 'followingWin', header: 'Followin Year' },
  ]

  columnsListMoviesByYear = [
    { field: 'id', header: 'Id' },
    { field: 'year', header: 'Year' },
    { field: 'title', header: 'Title' },
  ]


  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadStudios()
    this.loadMultipleWinners()
    this.loadIntervalWinner()
  }


  loadStudios(): void {
    this.dashboardService.getStudios().subscribe(
      (response: StudiosResponse) => {
        this.studios = response.studios.sort((a: any, b: any) => b.winCount - a.winCount).slice(0, 3)
      },
      (error: Error) => {
        console.error(error);
      }
    )
  }

  loadMultipleWinners(): void {
    this.dashboardService.getMultipleWinners().subscribe(
      (response: MultipleWinnersResponse) => {
        this.multipleWinners = response.years
      },
      (error: Error) => {
        console.error(error);
      }
    )
  }

  loadIntervalWinner(): void {
    this.dashboardService.getIntervalWinner().subscribe(
      (response: IntervalWinnerResponse) => {
        this.intervalWinnersMax = response.max
        this.intervalWinnersMin = response.min
      },
      (error: Error) => {
        console.error(error);
      }
    )
  }

  loadMovieByYear(): void {
    if(this.searchText?.toString() === undefined || this.searchText?.toString() === '') {
      return
    }
    this.dashboardService.getMovieByYear(this.searchText).subscribe(
      (response: Movie[]) => {
        this.movies = response
      },
      (error: Error) => {
        console.error(error);
      }
    )
  }

}
