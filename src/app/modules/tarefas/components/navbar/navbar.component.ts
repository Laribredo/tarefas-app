import { Component, OnInit } from '@angular/core';
import { LOGOUT } from 'src/app/shared/constants/funcoes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Logout(){
    LOGOUT();
  }

}
