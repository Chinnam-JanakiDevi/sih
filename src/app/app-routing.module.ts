import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UploadprojectComponent } from './uploadproject/uploadproject.component';
import { OutputvideosComponent } from './outputvideos/outputvideos.component';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  // {path:'login',component:LoginComponent},
  {path:'menu',component:MenuComponent},

  {path:'uploadproject',component:UploadprojectComponent},
  {path:'outputvideos',component:OutputvideosComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
