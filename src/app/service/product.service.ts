import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { ProductModel } from '../model/productmodel';  
import { BehaviorSubject } from 'rxjs';
import { BidDetailsModel } from '../model/biddetails';
import { BuyerModel } from '../model/buyermodel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products: Array<ProductModel>
buyers:Array<BuyerModel>
productsSubject:BehaviorSubject<Array<ProductModel>>
buyerSubject:BehaviorSubject<Array<BuyerModel>>;
product: ProductModel;
productSubject:BehaviorSubject<ProductModel>
apiUrl:string = 'http://localhost:58981/';
  constructor(private http: HttpClient) { 
    this.products=[];
    this.productsSubject= new BehaviorSubject<Array<ProductModel>>([]);
    this.buyers = [];
    this.buyerSubject= new BehaviorSubject<Array<BuyerModel>>([]);
    this.product=new ProductModel;
    this.productSubject= new BehaviorSubject<ProductModel>(new ProductModel);
    }  
      
  getproducts(){
    this.http.get<Array<ProductModel>>(this.apiUrl+'seller').subscribe(
      data => {
        this.products = data;
        this.productsSubject.next(data);
      }
    );
    }

    getbiddetails(productid:number)
    {
      this.http.get<Array<BuyerModel>>(this.apiUrl+'bids/'+productid).subscribe(
        data => {
          this.buyers = data;
          this.buyerSubject.next(data);
        });
         this.http.get<ProductModel>(this.apiUrl+'seller/'+productid).subscribe(
        data => {
          this.product = data;
          this.productSubject.next(data);
        })
    };
}
