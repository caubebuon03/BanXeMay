import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //FormsModule,
    //NgbModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    //NgbModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
