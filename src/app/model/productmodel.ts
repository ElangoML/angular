export class ProductModel {  
    id: Number;  
    productName: string; 
    shortDescription:string; 
    detaildDescription : string;
    category:string;
    startingPrice:Number;
    bidEndingDate:Date;


    constructor()
            {
                this.id=0
                this.productName='';
                this.shortDescription=''; 
                this.detaildDescription=''
                this.category='';
                this.startingPrice=0
                this.bidEndingDate=new Date();
            }
  
}  