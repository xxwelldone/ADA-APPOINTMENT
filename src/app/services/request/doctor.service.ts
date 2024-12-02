import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorAppointment } from '../../models/doctor-appointment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor(private http: HttpClient) {}
  private url = 'https://appointments-api-ur36.onrender.com';

  get(): Observable<DoctorAppointment[]> {
    return this.http.get<DoctorAppointment[]>(`${this.url}/doctors`);
  }
}
