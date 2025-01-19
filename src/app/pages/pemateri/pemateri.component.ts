import { Component } from '@angular/core';
import { TopbarComponent } from '../../layout/topbar/topbar.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';

@Component({
  selector: 'app-pemateri',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent],
  templateUrl: './pemateri.component.html',
  styleUrl: './pemateri.component.css',
})
export class PemateriComponent {}
