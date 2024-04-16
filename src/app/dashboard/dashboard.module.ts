import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TeamsComponent } from './pages/teams/teams.component';
@NgModule({
  declarations: [
    TopbarComponent,
    HomePageComponent,
    UserProfileComponent,
    SidebarComponent,
    LayoutComponent,
    TeamsComponent
  ],
  exports:[
    HomePageComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatSlideToggleModule
  ]
})
export class DashboardModule { }
