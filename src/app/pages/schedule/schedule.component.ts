import { Component } from '@angular/core';
import { AppointmentService } from '../../services/request/appointment.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorService } from '../../services/request/doctor.service';
import { map } from 'rxjs';
import { DoctorAppointment } from '../../models/doctor-appointment.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent {
  constructor(private router: Router) {}
  public specialty!: string;
  public doctors: DoctorAppointment[] = [];

  onChoose() {
    this.router.navigate(['schedule/', this.specialty]);
  }
}
