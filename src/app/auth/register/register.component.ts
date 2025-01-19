import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [RegisterService],
})
export class RegisterComponent {
  userData = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  isLoading = false;

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  onRegister(event: Event) {
    event.preventDefault(); // Mencegah form refresh halaman

    if (this.userData.password !== this.userData.password_confirmation) {
      alert('Password and Confirmation Password do not match!');
      return;
    }

    this.registerService.Register(this.userData).subscribe({
      next: (response: any) => {
        console.log('User registered successfully:', response);
        alert('Registration successful!');
        this.isLoading = false; // Nonaktifkan loading
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again.');
        this.isLoading = false;
      },
    });
  }
}
