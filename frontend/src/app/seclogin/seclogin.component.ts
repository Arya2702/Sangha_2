import { Component } from '@angular/core';

@Component({
  selector: 'app-seclogin',
  templateUrl: './seclogin.component.html',
  styleUrl: './seclogin.component.css'
})
export class SecloginComponent {
  wordToDisplay: string = 'Secretary';
  reRouteDest: string = 'sechome';

  ButtonVisible: boolean = false;

}
