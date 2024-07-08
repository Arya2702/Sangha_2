import { transition, trigger, style, animate, keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

const colorTransition = transition(':enter', [
  animate('3s ease-in', keyframes([
    style({ opacity: 0 }),
    style({ opacity: 1 }),
    style({ color: 'blue' }),
    style({ color: 'red' })]))
])


const colorChange = trigger('colorchange', [colorTransition]);

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.css',
  animations: [colorChange]
})
export class FirstpageComponent {

  // Give Input variable value for the toolbar

  isIconVisible: boolean = false;
  isShown: boolean = false;

  // Define router variable in constructor

  constructor(
    private router: Router
  ){}

  // Define navigate() function that helps to route to a specific page

  navigate(route: string){
    this.router.navigate([route]);
  }


}
