import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpserviceService } from 'src/app/_services/httpservice.service';

@Component({
  selector: 'app-viewupdates',
  templateUrl: './viewupdates.component.html',
  styleUrl: './viewupdates.component.css'
})
export class ViewupdatesComponent {

  // Defining the values for the input variables in the toolbar

  isIconEnabled: boolean = true;
  isIconVisible: boolean = false;
  title: string = 'View Updates';

  // Defining the table component and its headers

  dataSource = new MatTableDataSource([]);
  displayColumns: string[] = ['id', 'date', 'update'];

  // Creating http variable in the constructor, and calling the method getUpdateDetails
  // When we call the method in the constructor, the function gets automatically executed when the component is opened

  constructor(
    private http: HttpserviceService
  ){
    this.getUpdateDetails();
  }

  // Get data from the 'updates' table in the database

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
}
