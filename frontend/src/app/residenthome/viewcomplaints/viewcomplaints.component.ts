import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpserviceService } from 'src/app/_services/httpservice.service';

@Component({
  selector: 'app-viewcomplaints',
  templateUrl: './viewcomplaints.component.html',
  styleUrl: './viewcomplaints.component.css'
})
export class ViewcomplaintsComponent {

  // Defining the values for the input variables in the toolbar

  isIconEnabled: boolean = true;
  isIconVisible: boolean = false;
  title: string = 'View Complaints';

  // Defining the table component and its headers

  dataSource = new MatTableDataSource([]);
  displayColumns: string[] = ['id', 'name', 'typeofcomplaint', 'description', 'status'];

  // Creating http variable in the constructor, and calling the method getComplaintDetails
  // When we call the method in the constructor, the function gets automatically executed when the component is opened

  constructor(
    private http: HttpserviceService
  ){
    this.getComplaintDetails()
  }

  // Get data from the 'complaint' table in the database

  async getComplaintDetails(){
    let result = await this.http.getComplaintDetails();
    result.rows = JSON.parse(result.rows);
    if (result.success){
      this.dataSource = new MatTableDataSource(result.rows);
    }
    else{
      console.log('Error');
    }
  }
}
