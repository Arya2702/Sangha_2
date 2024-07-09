import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sechome',
  templateUrl: './sechome.component.html',
  styleUrl: './sechome.component.css'
})
export class SechomeComponent {

  // Define input variables for the toolbar

  isIconEnabled: boolean = true;
  title: string = 'Home';
  isIconVisible: boolean = false;

  // Define router variable in constructor

  constructor(
    private router: Router
  ){}

  // Redirect to a specific page depending upon which card is clicked

  redirect(route: String){
    this.router.navigate(['sechome/'+route]);
  }

}
