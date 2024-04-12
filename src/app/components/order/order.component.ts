import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/icategory';
import { ProductsComponent } from '../products/products.component';
import { CreditCardPipe } from '../../pipes/credit-card.pipe';
import { Iproduct } from '../../models/iproduct';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ProductsComponent,FormsModule,CommonModule,CreditCardPipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  category:ICategory[];
  selectedCatId:number=0;
  recievedTotalOrderPrice:number=0;
  receivedProducts: Iproduct[] = [];
;
constructor(){
  this.category = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Bakery' },
  
   
  ];
}

change(top:number){
this.recievedTotalOrderPrice=top;
}

add(product:Iproduct)
{this.receivedProducts.push(product);
console.log(this.receivedProducts);
}
}