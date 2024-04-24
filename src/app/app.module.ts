import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResaltarDirective } from './directives/app.directive';
import { SharedModule } from './shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './dashboard/dashboard.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    SharedModule,
    MatSlideToggleModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
