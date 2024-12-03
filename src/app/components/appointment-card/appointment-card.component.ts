import { Component, Input } from '@angular/core';
import { Appointment } from '../../models/appointment.model';
import { DoctorService } from '../../services/request/doctor.service';
import { map } from 'rxjs';
import { DoctorAppointment } from '../../models/doctor-appointment.model';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../../services/request/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-card.component.html',
  styleUrl: './appointment-card.component.css',
})
export class AppointmentCardComponent {
  @Input() appointment!: Appointment;

  constructor(
    private appointmentApi: AppointmentService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  onEdit() {
    this.router.navigate([
      'schedule',
      this.appointment.doctor.specialty,
      this.appointment.date.split('T')[0],
      this.appointment.id,
    ]);
  }
  onCancel() {
    this.appointmentApi.changeStatusToCancel(this.appointment).subscribe({
      complete: () => {
        console.log('feito');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
