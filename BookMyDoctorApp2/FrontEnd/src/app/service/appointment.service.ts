import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  
  APPOINTMENT_PATH = 'http://localhost:3500/';
  GET_APPOINTMENT_PATH = 'appointment/getallappointments';
  UPDATE_APPOINTMENT_PATH = 'appointment/updateappointment';
  constructor(private http: HttpClient) { }
  getAllAppointment(): Observable<any> {

    return this.http.get(this.APPOINTMENT_PATH + this.GET_APPOINTMENT_PATH).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          return {};
        }
      }
    ));
  }
  
  createAppointment(appointment: object): Observable<object> {
    return this.http.post(`${this.APPOINTMENT_PATH}`+'appointment/addappointment', appointment);
  }

  getAppointment(id: number): Observable<Object> {
    return this.http.get(`${this.APPOINTMENT_PATH}/appointment/getappointment/${id}`);
  }

  updateAppointment(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.APPOINTMENT_PATH}/appointment/updateappointment/${id}`, value);
  }

}
