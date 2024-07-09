import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/_services/httpservice.service';

@Component({
  selector: 'app-complaintreg',
  templateUrl: './complaintreg.component.html',
  styleUrl: './complaintreg.component.css'
})
export class ComplaintregComponent {

  // Define the input variable for the toolbar

  isIconEnabled: boolean = true;
  isIconVisible: boolean = false;
  title: string = 'Complaint Registration';

  // Define variables in the constructor

  constructor(
    private fb: FormBuilder,
    private http: HttpserviceService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  // Define formControl to validate the form values under certain conditions

  form = this.fb.group({
    residentname: new FormControl(null, Validators.compose([
      Validators.required
    ])),

    type: new FormControl(null, Validators.compose([
      Validators.required
    ])),

    complaint: new FormControl(null, Validators.compose([
      Validators.required
    ]))
    
  })

  // Define a snack bar method that opens when it is called

  openSnackBar(message: string, action: string){
    this._snackBar.open(message, action, {duration: 2000});
  }

  // Define the function that checks values, and then enters the form details inside the database
  
  async rescheck(){
    let param = {
      residentname: this.form.value.residentname,
      typeofcomplaint: this.form.value.type,
      description: this.form.value.complaint
    };
    console.log(param);

    if (param.residentname == null || param.typeofcomplaint == null || param.description == null || param.residentname == ''
        || param.typeofcomplaint == '' || param.description == ''){
      this.openSnackBar('Enter some value!', 'Dismiss');
    }
    else{
      try{
        let result = await this.http.complaint(param);
        if (result?.success){
          console.log('Success');
          this.openSnackBar('Your complaint has been registered.', 'Okay');
          this.router.navigate(['residenthome']);
        }
      }
  
      catch(err: any){
        console.log(err.message);
        this.openSnackBar('Error!', 'Okay');
      }

    }
  
  }

}
