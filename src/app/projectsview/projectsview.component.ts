import { Component } from '@angular/core';

@Component({
  selector: 'app-projectsview',
  templateUrl: './projectsview.component.html',
  styleUrls: ['./projectsview.component.css']
})
export class ProjectsviewComponent {
  canshow:boolean=false;
open(){
  this.canshow=true;
}
}
