import { Component, OnInit } from '@angular/core';
import { ApiCategoriesService } from '../../services/api-categories.service';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
product:Iproduct={} as Iproduct;
  categories:ICategory[]=[]
  constructor(private CategoryApi:ApiCategoriesService ,private productApi:ApiProductsService,private router:Router)
  {

  }
  ngOnInit(): void {
    this.CategoryApi.getAllCategories().subscribe({
      next: (res: ICategory[]) => {
        this.categories = res;
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      
      }
    });

  }
addProduct(){
this.productApi.addNewProduct(this.product).subscribe({
next:() =>{
  this.router.navigateByUrl('/products');

},
error:(err)=> {
  console.log(err);
},
});
  }

}
