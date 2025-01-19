import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ModulComponent } from './pages/modul/modul.component';
import { PesertaComponent } from './pages/peserta/peserta.component';
import { PemateriComponent } from './pages/pemateri/pemateri.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'modul', component: ModulComponent },
  { path: 'peserta', component: PesertaComponent },
  { path: 'pemateri', component: PemateriComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
