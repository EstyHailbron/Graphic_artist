import { Component, EventEmitter, OnInit, Output, NgModule, OnDestroy } from '@angular/core';
import { contactUs } from 'src/app/Classes/contactUs';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { Category } from 'src/app/Classes/category';
import { HttpServiceService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit , OnDestroy{
@Output()
onSaveForm:EventEmitter<contactUs>= new EventEmitter<contactUs>();

contentForm:contactUs={
  name: '',
  phone: 0,
  address: '',
  mail: '',
  category: Category.Albums,
  content: '',
  numOfLikes:0
};
  constructor() {}
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.onSaveForm.emit(this.contentForm);
     alert('Your request has been successfully received')
    
  }

  public get CategoryEnum(): typeof Category {
    return Category;
  }
}
