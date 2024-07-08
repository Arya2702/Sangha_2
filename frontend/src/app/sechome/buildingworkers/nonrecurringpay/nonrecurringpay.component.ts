import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpserviceService } from 'src/app/_services/httpservice.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

interface RowData {
  id: number | null;
  name: string;
  designation: string;
  phoneno: string;
  work_done: string;
  amt_paid: string;
  work_done_date: string;
}

@Component({
  selector: 'app-nonrecurringpay',
  templateUrl: './nonrecurringpay.component.html',
  styleUrl: './nonrecurringpay.component.css'
})
export class NonrecurringpayComponent {

  isIconEnabled: boolean = true;
  isIconVisible: boolean = false;
  
  dataSource = new MatTableDataSource<RowData>([]);
  displayColumns: string[] = ['id', 'name', 'designation', 'phoneno', 'work_done', 'amt_paid', 'work_done_date'];

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private http: HttpserviceService,
    private router: Router,
    public dialog: MatDialog
  ){
    this.getNonRecurringPayDetails()
  }

  getSerialNumber(index: number): number {
    return index+1;
  }

  async getNonRecurringPayDetails(){
    let result = await this.http.getNonRecurringPayDetails();
    result.rows = JSON.parse(result.rows);
    if(result.success){
      this.dataSource = new MatTableDataSource<RowData>(result.rows);
    }
    else{
      console.log('error');
    }
  }

  addBlankRow() {
    // Add a blank row to the end of the data source
    this.dataSource.data.push({ id: null, name: '', designation: '', phoneno: '', work_done: '', amt_paid: '', work_done_date: '' });

    // Trigger the MatTable to render the new row
    this.table.renderRows();
  }

  openDialog(): void {
    const dialogInsert = this.dialog.open(AddNonRecurringPayDialog, { 
      width: '50%', 
    });
    dialogInsert.afterClosed().subscribe(result => {
      this.getNonRecurringPayDetails();
    });
  }


}

@Component({
  selector: 'add-nonrecurringpay-dialog',
  templateUrl: 'add-nonrecurringpay-dialog.html',
})

export class AddNonRecurringPayDialog{
  form!:FormGroup;

  closeDialog() : void {
    this.dialogInsert.close();
  }

  openSnackBar2(message: string, action: string){
    this._snackBar.open(message, action, {duration: 2000});
    this.closeDialog();
  }

  openSnackBar3(message: string, action: string){
    this._snackBar.open(message, action, {duration: 2000});
  }

  constructor(
    public dialogInsert: MatDialogRef<AddNonRecurringPayDialog>,
    private fb: FormBuilder,
    private http: HttpserviceService,
    private _snackBar: MatSnackBar
  ){
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      name: new FormControl(null, Validators.required),
      designation: new FormControl(null, Validators.required),
      phoneno: new FormControl(null, Validators.required),
      work_done: new FormControl(null, Validators.required),
      amt_paid: new FormControl(null, Validators.required),
      work_done_date: new FormControl(null, Validators.required)
    })

  }

  async insertNonRecurringPayDetails(){
    const param = {
      name: this.form.value.name,
      designation: this.form.value.designation,
      phoneno: this.form.value.phoneno,
      work_done: this.form.value.work_done,
      amt_paid: this.form.value.amt_paid,
      work_done_date: this.form.value.work_done_date
    };

    console.log(param);

    if(param.name == null || param.designation == null || param.phoneno == null || param.work_done == null ||
      param.amt_paid == null || param.work_done_date == null){
        this.openSnackBar3('Please enter a value!', 'Dismiss');
      }

    else{

      let result = await this.http.insertNonRecurringPayDetails(param);
      if (result.success){
        this.openSnackBar2('Entered details!', 'Okay');
      }
    }
  }
}

