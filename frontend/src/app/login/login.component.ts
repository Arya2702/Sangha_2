import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  // Define router variable in constructor

  constructor(
    private router: Router
  ){ }

  // Define residentlogin and seclogin routing when the corresponding buttons are pressed in the html file of the component


  residentlogin(){
    this.router.navigate(['residentlogin']);
  }

  seclogin(){
    this.router.navigate(['seclogin']);
  }

  // Define the input values for the toolbar

  isIconVisible: boolean = false;
  isIconEnabled: boolean = false;
}
