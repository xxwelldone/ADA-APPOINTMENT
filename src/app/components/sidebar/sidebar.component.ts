import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isOpen = false;
  
  constructor(private router: Router) {}

  toggle() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    sessionStorage.removeItem('token'); // Remove o token da sessão
    this.router.navigate(['/login']); // Navega para a página de login
  }
}

