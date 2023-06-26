import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from 'src/app/Classes/category';
import { SubProfession } from 'src/app/Classes/Sub-profession';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  @Input()
  detailsInput: SubProfession = { category: Category.Albums, description: "design album", image: "image" }
  d?: string = "descreption";
  description?: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.description = params['description'];
      this.d = this.description?.toString()
    })
  }
  ngOnDestroy(): void {
  }
  ngOnInit(): void {
    this.d = this.description?.toString()
  }
  on() {
    console.log("on" + this.d);
  }
}
