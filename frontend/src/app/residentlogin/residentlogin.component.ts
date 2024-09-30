import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpserviceService } from '../_services/httpservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-residentlogin',
  templateUrl: './residentlogin.component.html',
  styleUrl: './residentlogin.component.css'
})
export class ResidentloginComponent implements OnInit {

  // Validating the form

  form = this.fb.group({
    email: new FormControl(null,Validators.compose([
      Validators.required
    ])),
    password: new FormControl(null,Validators.compose([
      Validators.required
    ])),
  })

  // Re-routing to different pages if we are at different pages

  navigateToDest(){
    if ((this.reRoute) === 'residenthome'){
      this.router.navigate(['residenthome']);
    }

    else if(this.reRoute === 'sechome'){
      this.router.navigate(['sechome'])
    }
  }

  // Defining the input variables for the toolbar

  isIconVisible: boolean = false;
  isIconEnabled: boolean = false;
  title: string = 'Login';

  // Re-routing to resident registration page

  register(){
    this.router.navigate(['res-reg']);
  }

  // Defining a snackbar that opens under certain conditions, defined in method(s) below

  openSnackBar(message: string, action: string){
    this._snackBar.open(message, action, {duration: 3000});
  }

  // Defining input variable for the 'new resident registration' button
  // Since the secretary login page uses the same code, if this is set to false, this button will not appear

  @Input() isButtonVisible: boolean = true;

  // Defining variables in constructors

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpserviceService,
    private _snackBar: MatSnackBar
    ){}

  // Defining input decorators for the form to display the appropriate word

  @Input() word: string = 'Resident';
  @Input() reRoute: string = 'residenthome';

  // Request passing using ngOnInit()

  ngOnInit(): void {
    sessionStorage.setItem('currentRoute', '/residentlogin/');
   }

  // Verify login using the data in the database

  async login(){
    const param: any = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    try{
    const result = await this.http.login(param);
    if (result?.success){
      this.navigateToDest();
    }
  }
    catch(e){
      console.log(e);
      this.openSnackBar('Invalid Email ID or password!', 'Okay');
    }

  }

}
