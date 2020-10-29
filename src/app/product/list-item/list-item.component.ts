import { Component, Injector,OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent extends BaseComponent implements OnInit {
  list: any;
  page: any;
  pageSize: any;
  totalItems: any;
  id_type: any;
  constructor( injector: Injector) {
    super(injector);
   }
  ngOnInit(): void {
    this.list = [];
    this.page = 1;
    this.pageSize = 5;
    this._route.params.subscribe((params) => {
      this.id_type = params['id'];
      this._api
        .post('api/product/search', {
          page: this.page,
          pageSize: this.pageSize,
          id_type: this.id_type,
        })
        .takeUntil(this.unsubscribe)
        .subscribe(
          (res) => {
            this.list = res.data;
            console.log(this.list);
            this.totalItems = res.totalItems;
          },
          (err) => {}
        );
    });
  }
    loadPage(page) {
      this._route.params.subscribe((params) => {
        let id = params['id'];
        this._api
          .post('api/product/search', {
            page: page,
            pageSize: this.pageSize,
            id_type: id,
          })
          .takeUntil(this.unsubscribe)
          .subscribe(
            (res) => {
              this.list = res.data;
              console.log(this.list);
              this.totalItems = res.totalItems;
            },
            (err) => {}
          );
      });
    }
    addToCart(it) {
      this._cart.addToCart(it);
      alert('Thêm thành công!');
    }
}
