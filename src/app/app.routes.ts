import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderComponent } from './components/order/order.component';
import { ValuesComponent } from './components/values/values.component';
import { VisionComponent } from './components/vision/vision.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'aboutus',component:AboutUsComponent,

children:[
    {path:'values',component:ValuesComponent},
    {path:'vision',component:VisionComponent
    }
]},
{path:'products',component:ProductsComponent},
{
path:'order',component:OrderComponent
},
{
path:"details/:id",component:DetailsComponent
},
{
    path:'',redirectTo:'home',pathMatch:'full'
}
,{
    path:"**",component:NotfoundComponent
}


];
