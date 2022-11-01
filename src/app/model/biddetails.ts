import { BuyerModel } from "./buyermodel";
import { ProductModel } from "./productmodel";

export class BidDetailsModel {  
    productDetails: ProductModel;  
    buyerDetails: Array<BuyerModel>; 

    constructor()
            {
                this.productDetails=new ProductModel;
                this.buyerDetails=[];
            }
  
}  