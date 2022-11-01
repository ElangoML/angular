import { Component, OnInit } from '@angular/core';
import { BuyerModel } from '../model/buyermodel';
import { ProductModel } from '../model/productmodel';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-biddetail',
  templateUrl: './biddetail.component.html',
  styleUrls: ['./biddetail.component.css']
})
export class BiddetailComponent implements OnInit {
  buyers: Array<BuyerModel>
  product: ProductModel
  columnsToDisplay:Array<any>
  constructor(private productservice:ProductService) { 
    this.buyers = [];
    this.product = new ProductModel;
    this.columnsToDisplay = ['bidAmount','name','email','mobile']; 
  }

  ngOnInit(): void {
    this.productservice.buyerSubject.subscribe(
      data=> {
      this.buyers = data;
            }
  );
  this.productservice.productSubject.subscribe(
      data=> {
      this.product = data;
      }
  );
  }

}
