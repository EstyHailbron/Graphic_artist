import { Injectable } from '@angular/core';
import { Category } from '../Classes/category';
import { SubProfession } from '../Classes/Sub-profession';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject, Subscription } from 'rxjs';
import { feedBack } from '../Classes/feedBack';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  env = environment;
  constructor(private serHttp: HttpClient) {
  }

  getAll(): Observable<SubProfession[]> {
    return this.serHttp.get<SubProfession[]>(this.env.URL + '/SubProfession');
  }

  getAllFeedback(): Observable<feedBack[]> {
    return this.serHttp.get<feedBack[]>(this.env.URL + '/feedBack');
  }

  addFeedback(feedBack: feedBack): Observable<feedBack[]> {
    return this.serHttp.post<feedBack[]>(this.env.URL + '/feedBack', feedBack);
  }


  addLikes(feedBack: feedBack): Observable<feedBack[]> {
    return this.serHttp.put<feedBack[]>(this.env.URL + '/feedBack', feedBack.phone);
  }

  public get CategoryEnum(): typeof Category {
    return Category;
  }

  private gift: Subject<string> = new Subject();
  setGift(value: string) {
    this.gift.next(value);
  }
  getGift() {
    return this.gift;
  }
}

