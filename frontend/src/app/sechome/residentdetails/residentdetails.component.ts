import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpserviceService } from 'src/app/_services/httpservice.service';

@Component({
  selector: 'app-residentdetails',
  templateUrl: './residentdetails.component.html',
  styleUrl: './residentdetails.component.css'
})
export class ResidentdetailsComponent {

  isIconEnabled: boolean = true;
  isIconVisible: boolean = false;

  dataSource = new MatTableDataSource([]);
  displayColumns: string[] = ['houseno', 'firstname', 'lastname', 'typeofres', 'email'];

  constructor(
    private http: HttpserviceService
  ) {
    this.getResidentDetails();
  }


  async getResidentDetails(){
    let result = await this.http.getResidentDetails();
    result.rows = JSON.parse(result.rows);
    console.log(result.rows);
    if(result.success){
      this.dataSource = new MatTableDataSource(result.rows);
    }
    else{
      console.log('No success');
    }

  }
}
