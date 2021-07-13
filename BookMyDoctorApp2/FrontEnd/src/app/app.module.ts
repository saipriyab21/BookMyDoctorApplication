import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { FormsModule,  ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { LoginComponent } from './login/login.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AddAvailabilityComponent } from './add-availability/add-availability.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { AllFeedbacksComponent } from './all-feedbacks/all-feedbacks.component';

import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { DataTablesModule } from 'angular-datatables';
import { AllPatientsComponent } from './all-patients/all-patients.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    FooterComponent,
    GetstartedComponent,
    HeaderComponent,
    AdminhomeComponent,
    LoginComponent,
    AddDoctorComponent,
    AddAppointmentComponent,
    AddAvailabilityComponent,
    AddFeedbackComponent,
    AddPatientComponent,
    AllAppointmentsComponent,
    AllDoctorsComponent,
    AllFeedbacksComponent,
    DoctorHomeComponent,
    AdminHomeComponent,
    PatientHomeComponent,
    AllPatientsComponent,
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
