import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/_services/httpservice.service';

@Component({
  selector: 'app-res-reg',
  templateUrl: './res-reg.component.html',
  styleUrl: './res-reg.component.css'
})
export class ResRegComponent{

  // Define input variables for the toolbar

  isIconVisible: boolean = false;
  isIconEnabled: boolean = false;
  
  // Validate the form with specific conditions

  form = this.fb.group({
    firstname: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.maxLength(40)
    ])),

    lastname: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.maxLength(40)
    ])),

    typeofres: new FormControl(null, Validators.compose([
      Validators.required,
    ])), 

    yearofmovingin: new FormControl(null, Validators.compose([
      Validators.required,
    ])),

    houseno: new FormControl(null, Validators.compose([
      Validators.required
    ])),

    email: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.email
    ])),

    password: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30)
    ])),

    confirmPassword: new FormControl(null, Validators.compose([
      Validators.required,
    ]))
    })

  // Define the constructor variables  

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private http: HttpserviceService,
    private fb: FormBuilder
  ){}

  // Check if the fields 'password' and 'confirmPassword' are the same
  // If yes, return true; else return false

  matchPassword() : boolean {
    const passwordControl = this.form.get('password');
    const confirmPasswordControl = this.form.get('confirmPassword');

    if (passwordControl && confirmPasswordControl) {
      const passwordValue = passwordControl.value;
      const confirmPasswordValue = confirmPasswordControl.value;
      if (passwordValue === confirmPasswordValue) {
      confirmPasswordControl.setErrors(null);
      return true;
      } 
      else {
      confirmPasswordControl.setErrors({ mismatch: true });
      return false;
    }
  }
  return false;
  }

  // Check if the entered year of moving in is valid - that is, between 1970 and the current year

  yearRange() : boolean {
    const yearControl = this.form.get('yearofmovingin');
    if (yearControl && yearControl.value !== null && !isNaN(yearControl.value)) {
      const year = parseInt(yearControl.value, 10);
      const currentYear = new Date().getFullYear();
      if( year >= 1970 && year <= currentYear ){
        yearControl.setErrors(null);
        return true;
      }
      else{
        yearControl.setErrors({ invalidYear: true });
        return false;
      }
    }
    return false;
  }

  // Snackbars are executed if a given condition in the above methods are satisfied


  openSnackBar(message: string, action: string){
    this._snackBar.open(message, action, {duration: 2000});
    this.router.navigate(['residentlogin']);
  }

  openSnackBar2(message: string, action: string){
    this._snackBar.open(message, action, {duration: 2000});
  }

  // Enter resident registration details into the database


  async resreg(){
    if(this.matchPassword() && this.yearRange()){
    let param = {
      firstname: this.form.value.firstname,
      lastname: this.form.value.lastname,
      typeofres: this.form.value.typeofres,
      yearofmovingin: this.form.value.yearofmovingin,
      houseno: this.form.value.houseno,
      email: this.form.value.email,
      password: this.form.value.password
    }
    console.log(param);

    try{
    let result = await this.http.resreg(param);
    if(result.success){
      this.openSnackBar("Registered!", "Okay");
    }
  }
  catch{
    this.openSnackBar2("This House Number or Email ID already exists!", 'Okay');
  }
}
  else if (!this.matchPassword())
  this.openSnackBar2('Passwords do not match!', 'Okay');

  else if (!this.yearRange()){
    this.openSnackBar2('Invalid year range!', 'Okay');
  }
}

}
