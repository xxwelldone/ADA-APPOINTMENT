import { Component, OnInit } from '@angular/core';
import { DoctorCardComponent } from '../../components/doctor-card/doctor-card.component';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../services/request/doctor.service';
import { DoctorAppointment } from '../../models/doctor-appointment.model';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-find-a-doctor',
  standalone: true,
  imports: [DoctorCardComponent],
  templateUrl: './find-a-doctor.component.html',
  styleUrl: './find-a-doctor.component.css',
})
export class FindADoctorComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private doctorApi: DoctorService
  ) {}
  specialty: string = '';
  appointmentDate: string = '';
  appointmentId!: string;

  doctors: DoctorAppointment[] = [];

  ngOnInit(): void {
    this.specialty = this.activatedRoute.snapshot.params['specialty'];
    this.appointmentDate = this.activatedRoute.snapshot.params['date'];
    this.appointmentId = this.activatedRoute.snapshot.params['id'];

    this.getDoctors();
  }

  getDoctors() {
    this.doctorApi
      .get()
      .pipe(
        map((result) =>
          result.filter((item) => item.specialty === this.specialty)
        )
      )
      .subscribe((response) => {
        this.doctors = response;
      });
  }
}
