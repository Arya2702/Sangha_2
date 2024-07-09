import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { HttpserviceService } from 'src/app/_services/httpservice.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrl: './updates.component.css'
})
export class UpdatesComponent {

  isIconEnabled: boolean = true;
  isIconVisible: boolean = false;

  dataSource = new MatTableDataSource([]);
  displayColumns: string[] = ['id', 'date', 'update'];

  constructor(
    private http: HttpserviceService,
    public dialog: MatDialog
  ){
    this.getUpdateDetails();
  }

  async getUpdateDetails(){
    let result = await this.http.getUpdateDetails();
    result.rows = JSON.parse(result.rows);
    if (result.success){
      this.dataSource = new MatTableDataSource(result.rows);
    }
    else{
      console.log('Error');
    }
  }

  openDialog(): void {
    const dialogInsert = this.dialog.open(AddUpdateDialog, { 
      width: '50%', 
    });
    dialogInsert.afterClosed().subscribe(result => {
      this.getUpdateDetails();
    });
  }

}

@Component({
  selector: 'add-update-dialog',
  templateUrl: 'add-update-dialog.html'
})

export class AddUpdateDialog{
  form!: FormGroup;

  closeDialog(){
    this.dialog.close();
  }

  constructor(
    private dialog: MatDialogRef<AddUpdateDialog>,
    private http: HttpserviceService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ){
    this.createForm();
  }

  getCurrentDate(): string {
    const currentDate = new Date();
  
    // Get year, month, and day
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because getMonth() returns zero-based month index
    const day = currentDate.getDate().toString().padStart(2, '0');
  
    // Construct yyyy-mm-dd format
    const formattedDate = `${year}-${month}-${day}`;
  
    return formattedDate;
  }

  createForm(){
    this.form = this.fb.group({
      update: new FormControl(null, Validators.required)
    })
  }

  openSnackBar(message: string, action: string){
    this._snackBar.open(message, action, {duration: 2000});
    this.closeDialog();
  }

  openSnackBar2(message: string, action: string){
    this._snackBar.open(message, action, {duration: 2000});
  }

  async insertUpdateDetails(){
    const param = {
      date: this.getCurrentDate(),
      update: this.form.value.update
    };
    console.log(param);

    if(param.update == null){
      this.openSnackBar2('Enter a value!', 'Dismiss');
    }

    else{

      let result = await this.http.insertUpdateDetails(param);
      if(result.success){
        this.openSnackBar('Entered update!', 'Okay');
      }
    }
  }
}
