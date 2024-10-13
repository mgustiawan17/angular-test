import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { ExpolersComponent } from './pages/expolers/expolers.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ExpolersModule } from './pages/expolers/expolers.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ExpolersModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [ExpolersComponent],
})
export class AppModule {}
