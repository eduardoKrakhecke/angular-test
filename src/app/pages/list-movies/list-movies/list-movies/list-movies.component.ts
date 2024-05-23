import { Component } from '@angular/core';
import { Movie } from "@app/pages/list-movies/list-movies/model/movie";
import {ListMoviesService} from "@app/pages/list-movies/list-movies/services/list-movies.service";

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent {

  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  paginatedMovies: Movie[] = [];
  searchText: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 15;
  totalPages: number = 0;
  totalItems: number = 0;

  constructor(private listMoviesService: ListMoviesService) {
  }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(page: number = 0): void {
    this.listMoviesService.getMovies(page, this.itemsPerPage, true, ).subscribe((response) => {
      this.movies = response.content;
      this.totalPages = response.totalPages;
      this.totalItems = response.totalElements;
      this.filterData();
    });
  }

  filterData(): void {
    this.filteredMovies = this.movies.filter(movie =>
      movie.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.currentPage = 1;
    this.paginateItems();
  }

  paginateItems(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedMovies = this.filteredMovies.slice(start, end);
  }

  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadMovies(page - 1);
    }
  }

}
