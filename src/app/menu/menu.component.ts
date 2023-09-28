import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  cseshow=false;
  showmenu=true
  showcse(){
    this.cseshow=true;
    this.showmenu=false;
  }
}
