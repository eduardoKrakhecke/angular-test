import { Component } from '@angular/core';
import { Movie } from "@app/pages/list-movies/list-movies/model/movie";
import { ListMoviesService } from "@app/pages/list-movies/list-movies/services/list-movies.service";

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent {

  movies: Movie[] = [];
  winnerFilter: boolean | undefined = undefined;
  yearFilter: number | undefined;
  currentPage: number = 1;
  itemsPerPage: number = 15;
  totalPages: number = 0;
  totalItems: number = 0;

  constructor(private listMoviesService: ListMoviesService) {
  }

  ngOnInit(): void {
    this.loadMovies(this.currentPage - 1);
  }

  loadMovies(page: number = 0): void {
    this.listMoviesService.getMovies(page, this.itemsPerPage, this.winnerFilter, this.yearFilter).subscribe((response) => {
      this.movies = response.content;
      this.totalPages = response.totalPages;
      this.totalItems = response.totalElements;
      this.currentPage = page + 1;
    }, (error: Error) => {
      console.error(error);
    });
  }


  setPage(page: number): void {
    this.currentPage = page;
    this.loadMovies(this.currentPage - 1);
  }

  isPageActive(page: number): boolean {
    return this.currentPage === page;
  }

}
