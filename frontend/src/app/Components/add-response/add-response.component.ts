import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/Classes/category';
import { contactUs } from 'src/app/Classes/contactUs';
import { feedBack } from 'src/app/Classes/feedBack';
import { HttpServiceService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-add-response',
  templateUrl: './add-response.component.html',
  styleUrls: ['./add-response.component.css']
})
export class AddResponseComponent implements OnInit ,OnDestroy{
  addResponse!: FormGroup; 
  send: boolean = false;

  constructor(public httpSer:HttpServiceService) { }
  ngOnDestroy(): void {
  }
   
  ngOnInit(): void {
    this.addResponse=new FormGroup({
      name:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required,Validators.email]),
      phone:new FormControl("",[Validators.required , Validators.maxLength(10),Validators.minLength(9)]),
      response:new FormControl("",[Validators.required ]),
      send:new FormControl("",[]),
    });
  }

  onSubmit(){
    let data=this.addResponse.value;
    console.log(data);
    let f:feedBack={name:data.name,phone:data.phone,
    mail:data.email,content:data.response,numOfLikes:data.numOfLikes,isClick:data.isClick};
    this.httpSer.addFeedback(f).subscribe((data) , (err) => { console.log(err) })
      alert('Your response has been successfully received!')
      this.send=true;
  }

  gift()
  {
    this.httpSer.setGift('You are entitled to a gift')
  }
}
