import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Store } from '@ngrx/store';
import { selectUser } from '../../store/auth.selector';
import { roles } from '../../models/ENUM/roles.enum';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule, SidebarComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private store: Store) {}
  adm!: boolean;
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;
  ngOnInit(): void {
    this.isAdm();
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }
  isAdm() {
    this.store.select(selectUser).subscribe((user) => {
      this.adm = user?.user.role === roles.ADMIN ? true : false;
    });
  }
}
