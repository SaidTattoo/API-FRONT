import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { AppNavbarComponent } from './shared/app-navbar/app-navbar.component';
import { AppSidemenuComponent } from './shared/app-sidemenu/app-sidemenu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RoutesGuardGuard } from './guard/routes-guard.guard';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppNavbarComponent,
    AppSidemenuComponent,
    
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,MatMenuModule
  ],
  
  providers: [RoutesGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
