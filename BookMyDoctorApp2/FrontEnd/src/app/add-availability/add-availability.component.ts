import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { DoctorService } from '../service/doctor.service';
import { Availability } from '../model/availability';
@Component({
  selector: 'app-add-availability',
  templateUrl: './add-availability.component.html',
  styleUrls: ['./add-availability.component.css']
})
export class AddAvailabilityComponent implements OnInit {

  constructor(private doctorservice : DoctorService) { }

  availability : Availability = new Availability();
  submitted=false;
  ngOnInit() { this.submitted=false;
  }
  availabilitysaveform=new FormGroup({
    fromDate: new FormControl('',[Validators.required]),
    endDate: new FormControl('',[Validators.required]),
  });

  saveAvailability(saveavailability){
    this.availability = new Availability();   
    this.availability.fromDate = this.FromDate.value;
    this.availability.endDate = this.EndDate.value;

    this.submitted = true;
    this.save();
  }
  
  save() {
    this.doctorservice.createAvailability(this.availability).
    subscribe(data => {console.log(data),alert("Successfully added your availability dates")},
    error =>{
      console.log(error);
      alert("An error has occurred while adding your availability, Please try after sometime");
    })
 
  }

  get FromDate(){
    return this.availabilitysaveform.get('fromDate');
  }

  get EndDate(){
    return this.availabilitysaveform.get('endDate');
  }
  
}
