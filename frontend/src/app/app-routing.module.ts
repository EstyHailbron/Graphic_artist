import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AddResponseComponent } from './Components/add-response/add-response.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { CustomerResponseComponent } from './Components/customer-response/customer-response.component';
import { DetailsComponent } from './Components/details/details.component';
import { ServicesComponent } from './Components/MyServices/services.component';


const routes: Routes =
  [
    { path: "about", component: AboutComponent },
    { path: "services", component: ServicesComponent , children:[
       { path: "details/:description", component: DetailsComponent }
    ]},
    { path: "contactUs", component: ContactUsComponent },
    { path: "customerResponse", component: CustomerResponseComponent , children:[
     {path : "addResponse" , component:AddResponseComponent}
    ]}



  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
