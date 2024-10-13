import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpolersComponent } from './pages/expolers/expolers.component';

export const routes: Routes = [
  { path: '', redirectTo: '/explorers', pathMatch: 'full' },
  { path: 'explorers', component: ExpolersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
