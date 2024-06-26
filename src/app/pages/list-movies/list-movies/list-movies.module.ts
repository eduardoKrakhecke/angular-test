import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListMoviesRouting } from "@app/pages/list-movies/list-movies/list-movies-routing";

import { ListMoviesComponent } from './list-movies/list-movies.component';
import { SharedModule } from "@app/shared/shared.module";


@NgModule({
  declarations: [
    ListMoviesComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ListMoviesRouting,
    SharedModule
  ]
})
export class ListMoviesModule {
}
