import { Component } from '@angular/core';
import { ApiCategoriesService } from '../../services/api-categories.service';
import { ApiProductsService } from '../../services/api-products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from '../../models/icategory';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
  
})
export class EditProductComponent {
  product :Iproduct={}as Iproduct
  categories:ICategory[]=[]
  currentID:number=0;
  constructor(private route: ActivatedRoute,private CategoryApi:ApiCategoriesService ,private productApi:ApiProductsService,private router:Router ,private _Router:Router,)
  {

  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentID = Number(params.get('id'));
  
      console.log('Current ID:', this.currentID);
  
    
    });
this.productApi.getProductById(this.currentID).subscribe({

next:(res)=> {
  this.product=res;
},


})

    this.CategoryApi.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      
      }
    });

  }


  updateProduct(): void {
    // Call the productApi service to update the product
    this.productApi.updateProduct(this.product).subscribe({
      next: (updatedProduct) => {
        console.log('Product updated successfully:', updatedProduct);
        // Redirect to the product details page or any other route after updating
        this.router.navigateByUrl(`/products`);
      },
      error: (err) => {
        console.error('Error updating product:', err);
        // Handle error as needed
      }
    });
  }
}
