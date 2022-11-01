export class BuyerModel {  
    id:Number;
    firstName: string;  
    lastname: string;  
    address: string;  
    city: string;  
    state: string;
    pin: string;
    phone: string;
    email:string;
    productId: Number;
    bidAmount: Number;

    constructor()
{
    this.id = 0;
    this.firstName = '';  
    this. lastname='';  
    this.address='';  
    this.city = '';  
    this.state = '';
    this.pin = '';
    this.phone = '';
    this.email = '';
    this.productId = 0;
    this.bidAmount = 0;
}

}  
