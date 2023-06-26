import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SubProfession } from 'src/app/Classes/Sub-profession';
import { HttpServiceService } from 'src/app/Services/http-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnDestroy {

  ProffesionList: Array<SubProfession> = [];
  constructor(public httpSer: HttpServiceService) {
  }
  ngOnDestroy(): void {
  }
  ngOnInit(): void {
    this.httpSer.getAll().subscribe((data) => { this.ProffesionList = data }, (err) => { console.log(err) })
  }






}
