import { Component } from '@angular/core';
import { AppointmentCardComponent } from '../../components/appointment-card/appointment-card.component';
import { AppointmentService } from '../../services/request/appointment.service';
import { Appointment } from '../../models/appointment.model';

@Component({
  selector: 'app-my-appointments',
  standalone: true,
  imports: [AppointmentCardComponent],
  templateUrl: './my-appointments.component.html',
  styleUrl: './my-appointments.component.css',
})
export class MyAppointmentsComponent {
  constructor(private appointmentAPI: AppointmentService) {}
  appointments: Appointment[] = [];

  ngOnInit(): void {
    this.getAppointments();
  }
  getAppointments() {
    this.appointmentAPI
      .get()
      .subscribe((results) => (this.appointments = results));
  }
}
