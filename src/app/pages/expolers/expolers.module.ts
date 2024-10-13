import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpolersComponent } from './expolers.component';
import { RouterModule } from '@angular/router';

// Import PrimeNG modules
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExpolersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'explorers', component: ExpolersComponent },
    ]),
    FormsModule,
  ],
})
export class ExpolersModule {}
