import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticProductService } from '../../services/static-product.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
currentID:number=0;
product:Iproduct|undefined={} as Iproduct;
  constructor(private _activatedRoute:ActivatedRoute ,private _StaticProductService:StaticProductService)
  {

  }
  ngOnInit(): void {
   this.currentID=Number( this._activatedRoute.snapshot.paramMap.get('id'));
   this.product=this._StaticProductService.getProductByID(this.currentID);
  }

}
