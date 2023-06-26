import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpServiceService } from './Services/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'pyProject';
  today: number = Date.now();
  gift:string="By adding a comment you are entitled to a gift";

  constructor(public httpSer: HttpServiceService){
    this.httpSer.getGift().subscribe((n)=>{
      this.gift=n;
    })
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 myFunction() {
    var x : any= document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
}


