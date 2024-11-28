import { Component } from '@angular/core';
import { AppointmentCardComponent } from '../../components/appointment-card/appointment-card.component';

@Component({
  selector: 'app-my-appointments',
  standalone: true,
  imports: [AppointmentCardComponent],
  templateUrl: './my-appointments.component.html',
  styleUrl: './my-appointments.component.css'
})
export class MyAppointmentsComponent {

}
