import { Component, OnInit } from '@angular/core';
//import 'datatables.net';
import { Observable, Subject } from 'rxjs';
import { Doctor } from '../model/doctor';
import { DoctorService } from '../service/doctor.service';
@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();
  Doctors: Observable<Doctor[]>;
  Doctor : Doctor=new Doctor();
  deleteMessage=false;
  constructor(private DoctorService : DoctorService) { }

  ngOnInit() {
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.DoctorService.getDoctor().subscribe(data =>{
    this.Doctors =data;
    this.dtTrigger.next();
    })
  }
  
}

  
