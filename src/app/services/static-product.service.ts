import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { ICategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {
products:Iproduct[]
  constructor() { 


    this.products = [
      { id: 1, name: 'Product 1', quantity: 5, price: 3000, imgUrl:'assets/images/airpods.jpg', catId: 1 },
      { id: 2, name: 'Product 2', quantity: 3, price: 20, imgUrl:'assets/images/bakes.jpeg', catId: 2 },
      
      { id: 3, name: 'Product 3', quantity: 2, price: 100000, imgUrl: '/assets/images/iphone.jpg', catId: 1 },
      { id: 5, name: 'Product 4', quantity: 2, price: 20, imgUrl:'assets/images/camera.jpeg', catId: 1},
           { id: 5, name: 'Product 5', quantity: 1, price: 250000, imgUrl:'assets/images/lap.jpg', catId: 1},
 
    ];


  }


  getAllProducts():Iproduct[]
  {
return this.products;
  }


  getProductByID(id:number):Iproduct|undefined
  {
 return this.products.find((product)=>product.id==id);
  }


  getProductsByCategoryID(catId:number):Iproduct[]
  {

if(catId==0)
  {
    return this.products
  }else{
    return this.products.filter((prd)=>prd.catId==catId)
  }



  }
}
