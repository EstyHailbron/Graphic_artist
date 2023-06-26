import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/Services/http-service.service';
import { faThumbsUp as solid } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as regular } from '@fortawesome/free-regular-svg-icons';
import { feedBack } from 'src/app/Classes/feedBack';


@Component({
  selector: 'app-customer-response',
  templateUrl: './customer-response.component.html',
  styleUrls: ['./customer-response.component.css']
})
export class CustomerResponseComponent implements OnInit, OnDestroy {
  color = '';
  faThumbsUp = solid;
  faTumbsAfterClick = regular;
  send: boolean = false;
  feedBackList: Array<feedBack> = [];
  // subscribe: boolean = false;

  constructor(public httpSer: HttpServiceService) { }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.httpSer.getAllFeedback().subscribe((data) => { this.feedBackList = data; console.log(data) }, (err) => { console.log(err) })

  }
  // addLike(currentItem: feedBack) {
  //   if (this.subscribe === false)
  //   { this.httpSer.addLikes(currentItem).subscribe((data) => { this.feedBackList = data }, (err) => { console.log(err) })
  //   this.subscribe = true;
  // }
  addLike(currentItem: feedBack) {
    if (!currentItem.isClick)
      this.httpSer.addLikes(currentItem).subscribe((data) => { this.feedBackList = data }, (err) => { console.log(err) })

  }
  click() {
    this.send = true;
  }

}
