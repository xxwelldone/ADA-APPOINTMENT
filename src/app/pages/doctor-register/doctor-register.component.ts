import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { DoctorService } from '../../services/request/doctor.service';

@Component({
  selector: 'app-doctor-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './doctor-register.html',
  styleUrl: './doctor-register.component.css',
})
export class doctorRegisterComponent {
  constructor(private doctorApi: DoctorService) {}

  doctorRegister: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    specialty: new FormControl('', [Validators.required]),
    CRM: new FormControl('', [Validators.required]),
    hospital: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    modalty: new FormControl('', [Validators.required]),
    photoUrl: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    this.doctorApi.post(this.doctorRegister.getRawValue()).subscribe({
      complete: () => {
        console.log('feito');

        this.doctorRegister.reset();
      },
    });
  }
}
