import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductService } from '../../services/static-product.service';
import { Iproduct } from '../../models/iproduct';
import { Location } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
currentID:number=0;
prdIds:number[]=[]
product:Iproduct|undefined={} as Iproduct;
  constructor(private _activatedRoute:ActivatedRoute 
    ,private _StaticProductService:StaticProductService,
    private _Router:Router,
  private location:Location
,private productApi:ApiProductsService
)
  {

  }
  ngOnInit(): void {
  //  this.currentID=Number( this._activatedRoute.snapshot.paramMap.get('id'));
  //  this.product=this._StaticProductService.getProductByID(this.currentID);
  this._activatedRoute.paramMap.subscribe((paramMap)=>{
   this.currentID=Number( paramMap.get('id'));
  // this.product=this._StaticProductService.getProductByID(this.currentID);
  this.productApi.getProductById(this.currentID).subscribe({
    next: (res: Iproduct) => {
      this.product = res;
    },
    error: (err) => {
      console.log('Error fetching product:', err);
      // Handle error, show message, etc.
    }
  });
  });
   this.prdIds=this._StaticProductService.mapProductsToID();
  }

next()
{
let index=this.prdIds.findIndex((id)=>this.currentID==id);
if(index!=this.prdIds.length-1)
  {
this._Router.navigateByUrl(`/details/${this.prdIds[index+1]}`)
}  }
pre()
{
  let index=this.prdIds.findIndex((id)=>this.currentID==id);
  if(index>0)
    {
this._Router.navigateByUrl(`/details/${this.prdIds[index-1]}`)

}}

back(){
this.location.back();
}
}
