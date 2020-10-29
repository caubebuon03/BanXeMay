import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailComponent} from './detail/detail.component';
import {ListItemComponent} from './list-item/list-item.component';
//import {CartComponent} from './Cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'list-item/:id', component: ListItemComponent},
  {path: 'detail/:id', component: DetailComponent},
 // {path: 'cart', component: CartComponent},
];

@NgModule({
  declarations: [ListItemComponent,DetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
