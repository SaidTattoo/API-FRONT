import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesGuardGuard } from './guard/routes-guard.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    component:DashboardComponent,
    canActivate:[RoutesGuardGuard],
    children:[{
      path: 'manteiner',  loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
