import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './dashboard/pages/home-page/home-page.component';
import { UserProfileComponent } from './dashboard/pages/user-profile/user-profile.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'profile', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
