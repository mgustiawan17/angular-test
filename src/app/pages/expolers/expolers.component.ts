import { Component, OnInit } from '@angular/core';
import { ExpolersService } from './expolers.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expolers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expolers.component.html',
  styleUrls: ['./expolers.component.css'],
  providers: [ExpolersService],
})
export class ExpolersComponent implements OnInit {
  folders: any[] = [];
  subfolders: any[] = [];
  files: any[] = [];
  activeSubfolderId: number | null = null;

  constructor(private expolersService: ExpolersService) {}

  ngOnInit(): void {
    this.loadFolders();
    this.loadSubFolders(this.folders[0].id);
    this.loadFiles(this.subfolders[0].id);
  }

  loadFolders(): void {
    this.expolersService.getFolder().subscribe(
      (data: any) => {
        this.folders = data;
        console.log('Folders:', this.folders);
      },
      (error: any) => {
        console.error('Error fetching folders:', error);
      }
    );
  }

  loadSubFolders(folderId: any): void {
    this.expolersService.getSubFolder(folderId).subscribe(
      (data: any) => {
        this.subfolders = data;
        this.activeSubfolderId = null;
        console.log('SubFolders:', this.subfolders);
      },
      (error: any) => {
        console.error('Error fetching subfolders:', error);
      }
    );
  }

  loadFiles(subfolderId: any): void {
    this.expolersService.getSubFolder(subfolderId).subscribe(
      (data: any) => {
        this.files = data;
        this.activeSubfolderId = subfolderId;
        console.log('Files:', this.files);
      },
      (error: any) => {
        console.error('Error fetching files:', error);
      }
    );
  }
}
