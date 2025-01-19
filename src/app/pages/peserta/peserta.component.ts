import { Component } from '@angular/core';
import { TopbarComponent } from '../../layout/topbar/topbar.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';

@Component({
  selector: 'app-peserta',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent],
  templateUrl: './peserta.component.html',
  styleUrl: './peserta.component.css',
})
export class PesertaComponent {}
