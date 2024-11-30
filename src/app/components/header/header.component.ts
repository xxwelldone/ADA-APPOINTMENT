import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule, SidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;

  toggleSidebar() {
    this.sidebar.toggle();
  }
}