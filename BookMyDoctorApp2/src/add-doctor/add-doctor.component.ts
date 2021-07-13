import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor';
import { DoctorService } from '../service/doctor.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private doctorService : DoctorService,private router: Router) { }

  doctor : Doctor= new Doctor();
  submitted=false;
  ngOnInit() { }
  newDoctor(): void{
    this.submitted=false;
    this.doctor=new Doctor();
  }
  
    doctorsaveform=new FormGroup({
    doctorName:new FormControl('' , [Validators.required , Validators.minLength(4),Validators.pattern("[A-Za-z ]{1,32}")] ),
    email:new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(20)] ),
    location:new FormControl('',[Validators.required]),
    speciality:new FormControl('',[Validators.required]),
    mobileNo:new FormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[789][0-9]{9}")]),
    chargesPerVisit:new FormControl('', [Validators.required, Validators.min(500), Validators.max(3000)]),
    hospitalName:new FormControl('' , [Validators.required , Validators.minLength(4), Validators.pattern("[A-Za-z ]{1,32}") ] )
  });

  saveDoctor(){
    this.submitted=true;
    this.doctor=new Doctor();   
    this.doctor.doctorName=this.DoctorName.value;
    this.doctor.email=this.Email.value;
    this.doctor.password=this.Password.value;
    this.doctor.location=this.Location.value;
    this.doctor.speciality=this.Speciality.value;
    this.doctor.mobileNo = this.MobileNo.value;
    this.doctor.chargesPerVisit = this.ChargesPerVisit.value;
    this.doctor.hospitalName = this.HospitalName.value;
    this.submitted = true;
    this.save();
  }

  save() {
    this.doctorService.addDoctor(this.doctor).
    subscribe(data =>  {console.log(data),alert("Registration Successful")},
    error =>{
      console.log(error);
      alert("Registration Failed, Please try after sometime!");
    })
 
  }


    get DoctorName(){
      return this.doctorsaveform.get('doctorName');
    }
  
    get Email(){
      return this.doctorsaveform.get('email');
    }
  
    get Password(){
      return this.doctorsaveform.get('password');
    }
  
    get Location(){
      return this.doctorsaveform.get('location');
    }
  
    get Speciality(){
      return this.doctorsaveform.get('speciality');
    }
  
    get MobileNo(){
      return this.doctorsaveform.get('mobileNo');
    }
  
    get ChargesPerVisit(){
      return this.doctorsaveform.get('chargesPerVisit');
    }
  
    get HospitalName(){
      return this.doctorsaveform.get('hospitalName');
    }


}



