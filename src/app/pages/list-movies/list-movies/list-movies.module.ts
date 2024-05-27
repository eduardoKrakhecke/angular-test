import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListMoviesRouting } from "@app/pages/list-movies/list-movies/list-movies-routing";

import { ListMoviesComponent } from './list-movies/list-movies.component';
import { NumbersOnlyDirective } from "@app/directives/numbers-only.directive";


@NgModule({
  declarations: [
    ListMoviesComponent,
    NumbersOnlyDirective
  ],
  imports: [
    FormsModule,
    CommonModule,
    ListMoviesRouting,
  ]
})
export class ListMoviesModule {
}
