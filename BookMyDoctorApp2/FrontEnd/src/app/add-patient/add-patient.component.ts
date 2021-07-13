import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { PatientService } from '../service/patient.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})

export class AddPatientComponent implements OnInit {


  patientsaveform = new FormGroup({
    patientName: new FormControl('' , [Validators.required , Validators.minLength(5), Validators.pattern("[a-zA-Z ]{1,32}") ] ),
    mobileNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[789][0-9]{9}")]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)] ),
    bloodGroup: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]),
    address: new FormControl('' , [Validators.required , Validators.minLength(4)] )
  });

  constructor(private patientService: PatientService) { }

  patient: Patient = new Patient();
  submitted = false;
  ngOnInit() { this.submitted = false; }

  savePatient() {
    this.patient = new Patient();
    this.patient.patientName = this.PatientName.value;
    this.patient.mobileNo = this.MobileNo.value;
    this.patient.email = this.Email.value;
    this.patient.password = this.Password.value;
    this.patient.bloodGroup = this.BloodGroup.value;
    this.patient.gender = this.Gender.value;
    this.patient.age = this.Age.value;
    this.patient.address = this.Address.value;
    this.submitted = true;
    this.save();
  }
  save() {
 
    this.patientService.createPatient(this.patient).
    subscribe(data => {console.log(data), alert("Registration Successful")},
    error =>{
      console.log(error);
      alert("Registration Failed,Try After Sometime");
    })
 
  }

  

  get PatientName() {
    return this.patientsaveform.get('patientName');
  }

  get MobileNo() {
    return this.patientsaveform.get('mobileNo');
  }

  get Email() {
    return this.patientsaveform.get('email');
  }

  get Password() {
    return this.patientsaveform.get('password');
  }

  get BloodGroup() {
    return this.patientsaveform.get('bloodGroup');
  }

  get Gender() {
    return this.patientsaveform.get('gender');
  }

  get Age() {
    return this.patientsaveform.get('age');
  }


  get Address() {
    return this.patientsaveform.get('address');
  }


}