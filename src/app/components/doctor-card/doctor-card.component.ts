import { Component, EventEmitter, Input, Output, Pipe } from '@angular/core';
import { DoctorAppointment } from '../../models/doctor-appointment.model';
import { CommonModule, DatePipe } from '@angular/common';
import { AppointmentService } from '../../services/request/appointment.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-card',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './doctor-card.component.html',
  styleUrl: './doctor-card.component.css',
})
export class DoctorCardComponent {
  @Input() DoctorDetails!: DoctorAppointment;
  @Input() appointmentDate!: string;

  availableTimes: string[] = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
  ];
  time: string = '';

  constructor(
    private appointmentAPI: AppointmentService,
    private router: Router
  ) {}

  isTimeAvailable(time: string) {
    return this.DoctorDetails.appointments.some(
      (appointment) =>
        appointment.time === `${time}` || appointment.time === `${time}00`
    );
  }
  OnTimeSelection(time: string) {
    this.time = time;
    this.saveAppointment();
  }
  saveAppointment() {
    this.appointmentAPI
      .post(this.DoctorDetails.id, this.appointmentDate, this.time)
      .subscribe({
        next: (respose) => {
          console.log('Consulta agendada com sucesso');
        },
        complete: () => {
          this.router.navigate(['/my-appointments']);
        },
        error: (err) => {
          console.log(
            'Houve erro ao salvar sua consulta no servidor, tente novamente mais tarde.'
          );
        },
      });
  }
}
