import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { HttpserviceService } from 'src/app/_services/httpservice.service';

@Component({
  selector: 'app-complaintdetails',
  templateUrl: './complaintdetails.component.html',
  styleUrl: './complaintdetails.component.css'
})
export class ComplaintdetailsComponent {

  isIconEnabled: boolean = true;
  buttonText: string = 'Pending';
  isIconVisible: boolean = false;

  dataSource = new MatTableDataSource([]);
  displayColumns: string[] = ['id', 'name', 'typeofcomplaint', 'description', 'status'];

  constructor(
    private http: HttpserviceService,
    private form: FormBuilder
  ){
    this.getComplaintDetails()
  }

  async getComplaintDetails(){

    let result = await this.http.getComplaintDetails();
    result.rows = JSON.parse(result.rows);
    if(result.success){
      console.log('Success');
      this.dataSource = new MatTableDataSource(result.rows);
    }
    else console.log('Error');
  }

 async updateStatus(element: any){
  
  if (element.status = 'Pending') {
    element.status = 'Closed';
    let param = { id: element.id };
    let result = await this.http.updateComplaintDetails(param);
    if(result.success){
      console.log('Success bro');
    }
  }
  else{
    element.status = 'Pending';
  }
 }

}
