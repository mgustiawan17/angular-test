import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService, LoginService],
})
export class LoginComponent {
  email = '';
  password = '';
  isLoading = false; // Indikator loading
  errorMessage = ''; // Menyimpan pesan error

  constructor(
    private loginService: LoginService,
    private router: Router,
    private messageService: MessageService
  ) {}

  onLogin(event: Event): void {
    event.preventDefault();
    this.isLoading = true;
    this.errorMessage = ''; // Reset pesan error

    this.loginService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        console.log('Login successful:', response);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Login successful!',
        });
        this.isLoading = false;
        this.router.navigate(['/dashboard']).then(() => {
          // Setelah navigasi, reload halaman
          window.location.reload();
        }); // Navigasi ke halaman dashboard
      },
      error: (error: any) => {
        console.error('Login failed:', error);
        alert('Login Error!');
        this.errorMessage =
          error.error.message || 'Login failed. Please try again.';
        this.isLoading = false;
      },
    });
  }
}
