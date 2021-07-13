import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from "./aboutus/aboutus.component";
import { HomeComponent } from "./home/home.component";
import { GetstartedComponent } from "./getstarted/getstarted.component";
import { LoginComponent } from './login/login.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddAvailabilityComponent } from './add-availability/add-availability.component';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AllFeedbacksComponent } from './all-feedbacks/all-feedbacks.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';

const routes: Routes = [ 
{ path: "", component: HomeComponent },
{ path: "homepage", component: HomeComponent },
{path: 'login', component: LoginComponent},
{path: 'add-doctor', component: AddDoctorComponent},
{path : 'all-doctors', component:AllDoctorsComponent},
{path : 'add-availability', component:AddAvailabilityComponent},
{path : 'add-appointment', component : AddAppointmentComponent},
{path : 'all-appointments', component: AllAppointmentsComponent},
{path : 'add-patient', component : AddPatientComponent},
{path:'all-patients', component : AllPatientsComponent},
{path : 'add-feedback', component: AddFeedbackComponent},
{path : 'all-feedbacks', component : AllFeedbacksComponent},
{ path: 'getstarted', component: GetstartedComponent },
{path : 'admin-home', component : AdminHomeComponent},
{path : 'doctor-home', component : DoctorHomeComponent},
{path : 'patient-home', component : PatientHomeComponent},
{ path: "about-us", component: AboutusComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
