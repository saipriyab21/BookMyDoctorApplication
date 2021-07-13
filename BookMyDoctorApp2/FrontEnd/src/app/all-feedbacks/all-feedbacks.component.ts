import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Feedback } from '../model/feedback';
import { FeedbackService } from '../service/feedback.service';
@Component({
  selector: 'app-all-feedbacks',
  templateUrl: './all-feedbacks.component.html',
  styleUrls: ['./all-feedbacks.component.css']
})
export class AllFeedbacksComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();
  Feedbacks: Observable<Feedback[]>;
  Feedback : Feedback=new Feedback();
  deleteMessage=false;
 
  constructor(private feedbackService : FeedbackService) { }
   
  ngOnInit() {
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };  
    this.feedbackService.getFeedback().subscribe(data =>{
      this.Feedbacks =data;
      this.dtTrigger.next();
      })
  }
}