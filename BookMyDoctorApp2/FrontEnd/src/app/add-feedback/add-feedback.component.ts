import { Component, OnInit } from '@angular/core';
import { Feedback } from '../model/feedback';
import { FeedbackService } from '../service/feedback.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  constructor(private feedbackService : FeedbackService, private router: Router) { }

  feedback : Feedback = new Feedback();
  submitted=false;
  ngOnInit() { 
    this.submitted=false;
  }
  
    feedbacksaveform=new FormGroup({
    rating:new FormControl('',[Validators.required,Validators.min(1),Validators.max(5)]),
    feedbackComment:new FormControl('', [Validators.required]),
     
  });

  saveFeedback(){
    this.feedback=new Feedback();   
    this.feedback.rating=this.Rating.value;
    this.feedback.feedbackComment=this.FeedbackComment.value;
    this.submitted = true;
    this.save();
  }
  save() {
    this.feedbackService.createFeedback(this.feedback).
    subscribe(data => {console.log(data),alert("Thank you for your feedback")},
    error =>{
      console.log(error);
      alert("An error Occured while adding Feedback, Please try after sometime!");
    })
 
  }
  

  get Rating(){
    return this.feedbacksaveform.get('rating');
  }
  
  get FeedbackComment(){
    return this.feedbacksaveform.get('feedbackComment');
  }

  addFeedbackForm(){
    this.submitted=false;
    this.feedbacksaveform.reset();

  }
}