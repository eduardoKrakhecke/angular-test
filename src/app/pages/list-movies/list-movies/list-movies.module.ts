import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { ListMoviesRouting } from "@app/pages/list-movies/list-movies/list-movies-routing";



@NgModule({
  declarations: [
    ListMoviesComponent
  ],
  imports: [
    CommonModule,
    ListMoviesRouting
  ]
})
export class ListMoviesModule { }
