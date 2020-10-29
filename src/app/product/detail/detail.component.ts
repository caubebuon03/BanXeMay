import { Component,Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  product: any;
  ngOnInit(): void {
    (this.product = {}),
      this._route.params.subscribe((params) => {
        let id = params['id'];
        this._api
          .get('api/product/get-by-id/' + id)
          .takeUntil(this.unsubscribe)
          .subscribe((res) => {
            this.product = res;
            setTimeout(() => {
              this.loadScripts();
            });
          });
      });
  }
  addToCart(it) {
    this._cart.addToCart(it);
    alert('Thêm thành công!');
  }
}
