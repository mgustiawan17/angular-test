import { Component, OnInit } from '@angular/core';
import { TopbarComponent } from '../../layout/topbar/topbar.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { ModulService } from './modul.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-modul',
  standalone: true,
  imports: [
    ButtonModule,
    DialogModule,
    InputTextModule,
    CardModule,
    AvatarModule,
    CommonModule,
    TableModule,
    TopbarComponent,
    SidebarComponent,
    FormsModule,
    CalendarModule,
    DropdownModule,
  ],
  templateUrl: './modul.component.html',
  styleUrl: './modul.component.css',
  providers: [ModulService],
})
export class ModulComponent implements OnInit {
  products: any;
  displayModal: boolean = false;

  selectedName: string = '';
  selectedJenis: string = '';
  selectedMateri: string = '';
  selectedDate: Date | null = null;
  selectedTime: Date | null = null;
  selectedNamePemateri: string = '';
  jenisOptions: { label: string; value: string }[] = [
    { label: 'Pemograman', value: 'Pemograman' },
    { label: 'Creative Marketing', value: 'Creative Marketing' },
    { label: 'Management SDM', value: 'Management SDM' },
  ];

  constructor(private ModulService: ModulService) {}

  ngOnInit(): void {
    this.loadModulData();
  }

  loadModulData() {
    this.ModulService.getModul().subscribe(
      (response) => {
        this.products = response.modul;
        console.log('Data received:', this.products);
      },
      (error) => {
        console.error('Error loading modul data', error);
      }
    );
  }

  showDialog() {
    this.displayModal = true;
    console.log('suces');
  }

  editProduct(product: any) {
    // Logika edit
    console.log('Edit product:', product);
    // Anda bisa mengisi form dengan data yang dipilih untuk diubah
  }

  // Fungsi untuk menghapus produk
  deleteProduct(productId: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      // Logika untuk menghapus produk berdasarkan ID
      this.ModulService.deleteModul(productId).subscribe(
        (response) => {
          console.log('Product deleted:', response);
          this.loadModulData(); // Reload data setelah delete
        },
        (error) => {
          console.error('Error deleting product', error);
        }
      );
    }
  }

  saveData() {
    const payload = {
      name: this.selectedName,
      jenis: this.selectedJenis,
      materi: this.selectedMateri,
      date: this.selectedDate
        ? this.selectedDate.toISOString().split('T')[0]
        : null,
      time: this.selectedTime
        ? this.selectedTime.toTimeString().split(' ')[0]
        : null,
      name_pemateri: this.selectedNamePemateri,
    };

    this.ModulService.createModul(payload).subscribe(
      (response) => {
        console.log('Data saved:', response);
        this.displayModal = false;
        window.location.reload();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
