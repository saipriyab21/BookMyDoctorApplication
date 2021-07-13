import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { AppointmentService } from '../service/appointment.service';
import { Appointment } from '../model/appointment';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})


export class AddAppointmentComponent implements OnInit {

  constructor(private appointmentService : AppointmentService) { }

  appointment : Appointment = new Appointment();
  submitted=false;

  ngOnInit() {
    this.submitted = false;
  }


  appointmentsaveform=new FormGroup({
    appointmentDate: new FormControl('',[Validators.required]),
    appointmentStatus: new FormControl('',[Validators.required]),
    remark: new FormControl('',[Validators.required, Validators.pattern("[A-Za-z ]")]),

  });

  saveAppointment(){
    this.appointment = new Appointment();   
    this.appointment.appointmentDate = this.AppointmentDate.value;
    this.appointment.appointmentStatus = this.AppointmentStatus.value;
    this.appointment.remark = this.Remark.value;
    this.submitted = true;
    this.save();
  }
  
  save() {
    this.appointmentService.createAppointment(this.appointment).
    subscribe(data => {console.log(data),alert("Your appointment is booked succesfully")},
    error =>{
      console.log(error);
      alert("An error has occurred while booking appointment, Please try after sometime!");
    })
 
  }
  

  get AppointmentDate(){
    return this.appointmentsaveform.get('appointmentDate');
  }

  get AppointmentStatus(){
    return this.appointmentsaveform.get('appointmentStatus');
  }

  get Remark(){
    return this.appointmentsaveform.get('remark');
  }

  addAppointmentForm(){
    this.submitted=false;
    this.appointmentsaveform.reset();
  }

}




  
  
