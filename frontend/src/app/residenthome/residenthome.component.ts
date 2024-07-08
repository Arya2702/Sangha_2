import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-residenthome',
  templateUrl: './residenthome.component.html',
  styleUrl: './residenthome.component.css'
})
export class ResidenthomeComponent implements OnInit{

  // Input variable definition for the toolbar

  isIconEnabled: boolean = true;
  isIconVisible: boolean = false;
  title: string = 'Home';

  // Giving request to set route in sessionStorage - which goes to reusable

  ngOnInit(): void {
    sessionStorage.setItem('currentRoute', '/residenthome');
  }

  // Defining router variable in constructor

  constructor(
    private router: Router
  ){}

  // Routing to pages inside resident home

  complaint(route: String){
    this.router.navigate(['residenthome/'+route]);
  }

}
