import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UploadprojectComponent } from './uploadproject/uploadproject.component';
import { OutputvideosComponent } from './outputvideos/outputvideos.component';
import { MenuComponent } from './menu/menu.component';
import { ProjectsviewComponent } from './projectsview/projectsview.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'uploadproject',component:UploadprojectComponent},
  {path:'login',component:LoginComponent},
  {path:'projectsview',component:ProjectsviewComponent},
  {path:'outputvideos',component:OutputvideosComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
