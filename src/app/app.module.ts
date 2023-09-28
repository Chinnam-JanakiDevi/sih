import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OutputvideosComponent } from './outputvideos/outputvideos.component';
import { UploadprojectComponent } from './uploadproject/uploadproject.component';
import { LoginComponent } from './login/login.component';
import { ProjectsviewComponent } from './projectsview/projectsview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    OutputvideosComponent,
    UploadprojectComponent,
    LoginComponent,
    ProjectsviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
