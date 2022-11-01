import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../model/productmodel'; 
import { ProductService } from '../service/product.service';
 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<ProductModel>
  selectedproduct: number = 0;
  constructor(private productservice:ProductService) {
    this.products = [];
    this.productservice.getproducts();
   }

  ngOnInit(): void {
    this.productservice.productsSubject.subscribe(
      data=> {
      this.products = data;
      }
  );
  }
    getVal() {
    this.productservice.getbiddetails(this.selectedproduct)
  }


}
