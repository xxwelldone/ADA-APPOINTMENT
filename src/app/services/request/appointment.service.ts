import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../../models/appointment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}
  private url = 'https://appointments-api-ur36.onrender.com';

  get(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.url}/appointments`);
  }
  getById(id: string): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.url}/appointments/${id}`);
  }
  post(doctorId: string, date: string, time: string): Observable<void> {
    return this.http.post<void>(`${this.url}/appointments`, {
      doctorId: doctorId,
      date: date,
      time: time,
    });
  }
  putById(appointment: Appointment): Observable<void> {
    return this.http.put<void>(
      `${this.url}/appointments/${appointment.id}`,
      appointment
    );
  }
  changeStatusToCancel(appointment: Appointment): Observable<void> {
    return this.http.put<void>(
      `${this.url}/appointments/cancel/${appointment.id}`,
      appointment
    );
  }
  changeStatusToDone(appointment: Appointment): Observable<void> {
    return this.http.put<void>(
      `${this.url}/done/${appointment.id}`,
      appointment
    );
  }
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/appointments/${id}`);
  }
}
