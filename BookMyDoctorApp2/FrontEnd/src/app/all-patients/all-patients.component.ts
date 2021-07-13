import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Patient } from '../model/patient';
import { PatientService } from '../service/patient.service';
@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})

export class AllPatientsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();
  Patients: Observable<Patient[]>;
  Patient : Patient=new Patient();
  deleteMessage=false;
  constructor(private patientService : PatientService) { }

  ngOnInit() {
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.patientService.getPatient().subscribe(data =>{
    this.Patients =data;
    this.dtTrigger.next();
    })
  }
  
}

  
