import { Component, ElementRef, ViewChildren } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private auth: AuthService) {}
  warning = false;
  registerForm: FormGroup = new FormGroup({
    role: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirm: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    this.registerForm.setValidators(
      this.matchFieldsValidator('password', 'confirm')
    );
  }

  onRegister() {
    console.log(this.registerForm);
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
}
