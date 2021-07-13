import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  
  FEEDBACK_PATH = 'http://localhost:3500/';
  GET_FEEDBACK_PATH = 'feedback/getallfeedbacks';
  constructor(private http: HttpClient) { }
  getFeedback(): Observable<any> {

    return this.http.get(this.FEEDBACK_PATH + this.GET_FEEDBACK_PATH).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          return {};
        }
      }
    ));
  }
  
  createFeedback(feedback: object): Observable<object> {
    return this.http.post(`${this.FEEDBACK_PATH}`+'feedback/addfeedback', feedback);
  }
}