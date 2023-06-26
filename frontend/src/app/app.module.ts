import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from 'src/app/Components/about/about.component';
import { ServicesComponent } from 'src/app/Components/MyServices/services.component';
import { DetailsComponent } from './Components/details/details.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ReactiveFormsModule} from '@angular/forms';
import { CustomerResponseComponent } from './Components/customer-response/customer-response.component';
import { AddResponseComponent } from './Components/add-response/add-response.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { ShortStringPipe } from './short-string.pipe';
import { HighlightDirective } from './Directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    DetailsComponent,
    ContactUsComponent,
    CustomerResponseComponent,
    AddResponseComponent,
    ShortStringPipe,
    HighlightDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
