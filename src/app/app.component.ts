import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingService } from './services/communication/loading.service';
import { CommonModule } from '@angular/common';
import { doctorRegisterComponent } from './pages/doctor-register/doctor-register.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SpinnerComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(
    private loadService: LoadingService,
    private cdf: ChangeDetectorRef
  ) {}
  isLoading = this.loadService.isLoading;

  ngAfterViewInit(): void {
    this.cdf.detectChanges();
  }
}
