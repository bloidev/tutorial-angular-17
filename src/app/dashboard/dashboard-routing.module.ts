import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { TeamsComponent } from './pages/teams/teams.component';

const routes: Routes = [
  {path: 'home-page', component: HomePageComponent, pathMatch: 'full'},
  {path: 'profile', component: UserProfileComponent, pathMatch: 'full'},
  {path: 'team', component: TeamsComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
