import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private Url = 'http://localhost:3500/api';
  constructor(private http: HttpClient) { }
   getDoctor(): Observable<any> {
    return this.http.get(`${this.Url}/getalldoctors`);
  }

  addDoctor(doctor: Object): Observable<Object> {
    return this.http.post(`${this.Url}/adddoctor`, doctor);
  }
  createAvailability(availability: object): Observable<object> {
    return this.http.post(`${this.Url}`+'/addavailability', availability);
  }
}
