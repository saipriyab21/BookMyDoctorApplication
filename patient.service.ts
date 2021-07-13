import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})

export class PatientService {
  PATIENT_PATH = 'http://localhost:3500/';
  GET_PATIENT_PATH = 'patient/getallpatients';
  constructor(private http: HttpClient) { }
  getPatient(): Observable<any> {

    return this.http.get(this.PATIENT_PATH + this.GET_PATIENT_PATH).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          return {};
        }
      }
    ));
  }

  createPatient(patient: object): Observable<object> {
    return this.http.post(`${this.PATIENT_PATH}` + 'patient/addpatient', patient);
  }
}