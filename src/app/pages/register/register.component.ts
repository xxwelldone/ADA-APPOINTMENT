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

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private auth: AuthService, private router: Router) {}
  warning = false;
  registerForm: FormGroup = new FormGroup({
    role: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirm: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    this.registerForm.setValidators(
      this.matchFieldsValidator('password', 'confirm')
    );
  }

  onRegister() {
    const payload = this.formatPayload();
    this.auth.register(payload).subscribe({
      complete: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  matchFieldsValidator = (field1: string, field2: string): ValidatorFn => {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const value1 = formGroup.get(field1)?.value;
      const value2 = formGroup.get(field2)?.value;

      if (value1 !== value2) {
        this.warning = true;
        return { passwordDoesntMatch: true };
      }
      this.warning = false;
      return null;
    };
  };

  formatPayload() {
    const obj = this.registerForm.getRawValue();
    const {
      confirm,
      ...payload
    }: {
      confirm: string;
      name: string;
      email: string;
      password: string;
      role: string;
    } = obj;
    return payload;
  }
}
