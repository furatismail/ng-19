import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportingComponent } from './reporting.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './reporting.routes';


@NgModule({
  declarations: [
    ReportingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

    
  ]
})
export class ReportingModule { }
