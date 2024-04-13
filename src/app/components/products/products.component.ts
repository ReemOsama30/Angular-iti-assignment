import { Component, EventEmitter, Input, OnChanges, OnInit, Output,  } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightElementDirective } from '../../directives/highlight-element.directive';
import { Data, Router, RouterLink } from '@angular/router';
import { PowerPipe } from '../../pipes/power.pipe';
import { ProductCardDirective } from '../../directives/product-card.directive';
import { StaticProductService } from '../../services/static-product.service';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule,CommonModule,HighlightElementDirective,PowerPipe,ProductCardDirective,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges,OnInit {
  //products:Iproduct[];

  filteredProducts: Iproduct[] = [];
totalOrderPrice:number=0;

//define event

@Output() onOrderItem:EventEmitter<Iproduct>


//define event
@Output()   onTotalPriceChanged:EventEmitter<number>
@Input() recievedCategoryID:number=0;
num:number=2;
todaysDate:Date=new Date()

  constructor(private StaticProductService:StaticProductService,private router:Router,private apiProductService:ApiProductsService) {
    this.onOrderItem=new EventEmitter<Iproduct>()
    this.onTotalPriceChanged=new EventEmitter<number>()

  
    
    this.filteredProducts = this.StaticProductService.getAllProducts();
  }
  ngOnInit(): void {
   this.apiProductService.getAllProducts().subscribe({
    next:(res)=>{
      this.filteredProducts=res;
    }
  ,
  error(err) {
    console.log(err);
    
  },
  
  });
   
  }
  ngOnChanges(): void {
  //  this.filteredProducts= this.StaticProductService.getProductsByCategoryID(this.recievedCategoryID);

  this.apiProductService.getProductByCatId(this.recievedCategoryID).subscribe((res)=>{

      this.filteredProducts = res;
    


  });
  }
  

  buy(product:Iproduct){
    if(product.quantity>0)
    {
      product.quantity--;
//this.totalOrderPrice+=products.price;
      //fire event
     // this.onTotalPriceChanged.emit(this.totalOrderPrice)
     this.onOrderItem.emit(product);
    }
    }

  trackProducts(i:number,p:Iproduct){
   
    return p.id
  }

  
  // filteredProductsfn() {

    
  //   if (this.recievedCategoryID == 0) {
  //     this.filteredProducts = this.products;
  //   } else {
  //     this.filteredProducts = this.products.filter(prd => prd.catId == this.recievedCategoryID);
  //   }
  
  
  // }


  deleteProduct(id:number)
  {
this.apiProductService.deleteProduct(id).subscribe({

next:()=> {
  this.filteredProducts = this.filteredProducts.filter((p) => p.id !== id);
},
error:(err)=> {
  console.log(err);
},
})
  }
  NavigateToDetails()
  {
this.router.navigateByUrl('/details');
  }
}
