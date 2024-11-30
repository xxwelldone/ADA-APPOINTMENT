import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  warningMessage: string = '';
  shouldShow: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onLogin() {
    this.auth.login(this.loginForm.getRawValue()).subscribe({
      next: (result) => {
        sessionStorage.setItem('TOKEN', result.token);
      },
      complete: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.warningMessage =
          'Erro ao tentar acesso, verifique usuário e senha ou tente em instantes';
        this.showWarning();
      },
    });
  }
  showWarning() {
    this.shouldShow = true;
    setTimeout(() => {
      this.shouldShow = false;
    }, 2000);
  }
}
