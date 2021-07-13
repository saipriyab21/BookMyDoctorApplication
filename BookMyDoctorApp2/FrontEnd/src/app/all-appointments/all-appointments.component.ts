import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { AppointmentService } from 'src/app/service/appointment.service';
import { Appointment } from 'src/app/model/appointment';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();
  Appointments: Observable<Appointment[]>;
  Appointment : Appointment=new Appointment();
  deleteMessage=false;
  isUpdated=false;
  appointmentList: any;


  constructor(private appointmentService : AppointmentService) { }

  ngOnInit() {
    this.isUpdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.appointmentService.getAllAppointment().subscribe(data =>{
    this.Appointments =data;
    this.dtTrigger.next();
    }) 
}

updateAppointment(id: number) {
  this.appointmentService.getAppointment(id)
    .subscribe(
      data => {
        this.appointmentList=data           
      },
      error => console.log(error));
}

appointmentupdateform = new FormGroup ({
  appointmentId: new FormControl(),
  patient: new FormControl(),
  doctor: new FormControl(),
  appointmentDate: new FormControl(),
  appointmentStatus: new FormControl(),
  remark: new FormControl()
});

updateApp(updateapp) {
  this.Appointment=new Appointment(); 
 this.Appointment.appointmentId=this.AppointmentId.value;
 this.Appointment.appointmentDate=this.AppointmentDate.value;
 this.Appointment.appointmentStatus=this.AppointmentStatus.value;
 this.Appointment.remark=this.Remark.value;
 
 this.appointmentService.updateAppointment(this.Appointment.appointmentId,this.Appointment).subscribe(
  data => {     
    this.isUpdated=true;
    this.appointmentService.getAllAppointment().subscribe(data =>{
      this.Appointments =data
      })
  },
  error => console.log(error));
}

get AppointmentId() {
  return this.appointmentupdateform.get('appointmentId');
}

get AppointmentDate() {
  return this.appointmentupdateform.get('appointmentDate');
}

get AppointmentStatus() {
  return this.appointmentupdateform.get('appointmentStatus');
}

get Remark() {
  return this.appointmentupdateform.get('remark');
}

changeisUpdate() {
  this.isUpdated=false;
}
}