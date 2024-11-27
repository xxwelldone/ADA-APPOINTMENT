import { Component } from '@angular/core';
import { DoctorCardComponent } from '../../components/doctor-card/doctor-card.component';

@Component({
  selector: 'app-find-a-doctor',
  standalone: true,
  imports: [DoctorCardComponent],
  templateUrl: './find-a-doctor.component.html',
  styleUrl: './find-a-doctor.component.css'
})
export class FindADoctorComponent {

}
