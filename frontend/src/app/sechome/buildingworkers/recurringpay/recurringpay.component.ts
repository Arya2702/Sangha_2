import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { HttpserviceService } from 'src/app/_services/httpservice.service';

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
  selector: 'app-recurringpay',
  templateUrl: './recurringpay.component.html',
  styleUrl: './recurringpay.component.css'
})

export class RecurringpayComponent {

  isIconEnabled: boolean = true;
  isIconVisible: boolean = false;
  editingRowIndex: number | null = null;

  dataSource = new MatTableDataSource<RowData>([]);
  displayColumns: string[] = ['id', 'name', 'designation', 'phoneno', 'work_done', 'monthly_payment', 'paid_date', 'repeat'];

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private http: HttpserviceService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ){
    this.getRecurringPayDetails()
  }


  getSerialNumber(index: number): number {
    return index+1;
  }


  async getRecurringPayDetails(){
    let result = await this.http.getRecurringPayDetails();
    result.rows = JSON.parse(result.rows);
    if(result.success){
      this.dataSource = new MatTableDataSource<RowData>(result.rows);
    }

    else{
      console.log('error');
    }
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

  openSnackBar2(message: string, action: string){
    this._snackBar.open(message, action, {duration: 2000});
  }

  async insertRecurringPayDetails(element: any){
    let param = {
      name: element.name,
      designation: element.designation,
      phoneno: element.phoneno,
      work_done: element.work_done,
      monthly_payment: element.monthly_payment,
      paid_date: this.getCurrentDate()
    };
    console.log(param);
    let result = await this.http.insertRecurringPayDetails(param);
    if (result.success){
      this.openSnackBar2('Created new record!', 'Okay');
      this.getRecurringPayDetails();
    }
  }

  openDialog(): void {
    const dialogInsert = this.dialog.open(AddRecurringPayDialog, { 
      width: '50%', 
    });
    dialogInsert.afterClosed().subscribe(result => {
      this.getRecurringPayDetails();
    });
  }

}


@Component({
  selector: 'add-recurringpay-dialog',
  templateUrl: 'add-recurringpay-dialog.html',
})


export class AddRecurringPayDialog{
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
    public dialogInsert: MatDialogRef<AddRecurringPayDialog>,
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
      monthly_payment: new FormControl(null, Validators.required),
      paid_date: new FormControl(null, Validators.required)
    })

  }

  async insertRecurringPayDetails(){
    const param = {
      name: this.form.value.name,
      designation: this.form.value.designation,
      phoneno: this.form.value.phoneno,
      work_done: this.form.value.work_done,
      monthly_payment: this.form.value.monthly_payment,
      paid_date: this.form.value.paid_date
    };

    console.log(param);

    if(param.name == null || param.designation == null || param.phoneno == null || param.work_done == null ||
      param.monthly_payment == null || param.paid_date == null){
        this.openSnackBar3('Please enter a value!', 'Dismiss');
      }

    else{

    let result = await this.http.insertRecurringPayDetails(param);
    if (result.success){
      this.openSnackBar2('Entered details!', 'Okay');
    }
  }
}
}


