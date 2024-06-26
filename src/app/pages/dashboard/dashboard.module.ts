import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRouting } from "@app/pages/dashboard/dashboard-routing";
import { TableModule } from "@app/shared-components/table/table.module";
import { SharedModule } from "@app/shared/shared.module";



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    DashboardRouting,
    TableModule,
    SharedModule
  ]
})
export class DashboardModule {
}
