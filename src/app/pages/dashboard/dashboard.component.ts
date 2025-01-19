import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { TopbarComponent } from '../../layout/topbar/topbar.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    AvatarModule,
    CommonModule,
    TableModule,
    CalendarModule,
    TopbarComponent,
    SidebarComponent,
  ],
  providers: [DashboardService],
})
export class DashboardComponent implements OnInit {
  products: any;
  currentMonth: string;
  currentWeek: { label: string; date: number | null }[] = [];
  selectedDate: number | null = null;
  schedule = [
    {
      color: '#8E44AD', // Ungu
      title: 'Storytelling dalam Pemasaran',
      time: '09:00 - 11:00',
      description: 'With mr.jam',
    },
    {
      color: '#E74C3C', // Merah
      title: 'Pemrograman Frontend Modern',
      time: '12:00 - 14:00',
      description: 'With mr.firman',
    },
    {
      color: '#F1C40F', // Kuning
      title: 'Pengembangan API',
      time: '14:30 - 15:30',
      description: 'With mr.parja',
    },
  ];

  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) {
    const today = new Date();
    this.currentMonth = today.toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    });
    this.generateCurrentWeek(today);
  }

  ngOnInit() {
    this.dashboardService.getProductsMini().then((data) => {
      this.products = data;
    });
  }

  generateCurrentWeek(date: Date) {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay()); // Set to Sunday of the current week

    this.currentWeek = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);

      this.currentWeek.push({
        label: day.toLocaleString('default', { weekday: 'short' }),
        date: day.getDate(),
      });
    }
  }

  previousWeek() {
    const today = new Date();
    today.setDate(today.getDate() - 7); // Geser ke minggu sebelumnya
    this.generateCurrentWeek(today);
  }

  nextWeek() {
    const today = new Date();
    today.setDate(today.getDate() + 7); // Geser ke minggu berikutnya
    this.generateCurrentWeek(today);
  }

  selectDate(date: number | null) {
    this.selectedDate = date;
  }
  logout(): void {
    localStorage.removeItem('authToken');

    this.router.navigate(['/login']);
  }
}
