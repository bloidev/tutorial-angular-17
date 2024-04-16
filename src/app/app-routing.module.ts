import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [  
  {
    path: 'dashboard',
    pathMatch: 'full',
    redirectTo: 'dashboard/home-page',
  },  
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },  
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule),
  },  
  {
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  }, 
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
