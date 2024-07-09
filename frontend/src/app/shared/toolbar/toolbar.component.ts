import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/_services/httpservice.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  @Input() iconVisible: boolean = true;
  @Input() IconEnabled: boolean = true;
  @Input() title: string = 'SANGHA';
  @Input() iconVisible2: boolean = true;

  constructor(
    private http: HttpserviceService,
    private router: Router
  ){}

  logout(){
    this.http.logout();
    this.router.navigate(['login']);
  }

  navigate(){
    const currentUrl = this.router.url;
    console.log(currentUrl);

    if(currentUrl.includes('login')){
      this.router.navigate(['firstpage']);
    }

    if (currentUrl.includes('residenthome/')){
      this.router.navigate(['residenthome']);
    }

    else if (currentUrl.includes('sechome/')){
      this.router.navigate(['sechome']);
    }

    else if (currentUrl.includes('res-reg/')){
      this.router.navigate(['residentlogin']);
    }
  }

  redirect(){
    this.router.navigate(['login']);
  }
}
