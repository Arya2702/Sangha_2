import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buildingworkers',
  templateUrl: './buildingworkers.component.html',
  styleUrl: './buildingworkers.component.css'
})
export class BuildingworkersComponent {

  // Define input variables for the toolbar

  isIconEnabled: boolean = true;
  isIconVisible: boolean = false;

  // Define router variable in constructor

  constructor(
    private router: Router,
  ){}

  // Redirect to a component depending on which card is clicked

  redirect(route: String){
    this.router.navigate(['/sechome/buildingworkers/'+route]);
  }

}
