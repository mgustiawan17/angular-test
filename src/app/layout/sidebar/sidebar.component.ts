import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    AvatarModule,
    CommonModule,
    TableModule,
    FormsModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private router: Router) {}

  dashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  modul(): void {
    this.router.navigate(['/modul']);
  }

  peserta(): void {
    this.router.navigate(['/peserta']);
  }

  pemateri(): void {
    this.router.navigate(['/pemateri']);
  }

  logout(): void {
    localStorage.removeItem('authToken');

    this.router.navigate(['/login']);
  }
}
