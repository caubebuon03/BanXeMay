import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class HomeModule { }
