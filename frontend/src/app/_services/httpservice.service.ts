//Define the connection between the front end and back end

//Import important modules

import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  // fetch the domain specification given in 'environment.ts'

  domain = environment.domain;

  constructor(private http: HttpClient) {  }

  // Define logout() function

  logout(){
    sessionStorage.clear();
  }

  // Define the function resreg - that takes care of resident registration, fetches details from frontend and sends to backend

  async resreg(data: any){
    try{
    console.log(this.domain);
    return lastValueFrom(this.http.post<any>(this.domain+"/resreg/insertRegistration", data, ));
  }
  catch{
    console.log('http resreg Error');
  }
}

  // Define the function login - that connects the front end login page to the backend 

  async login(data: any){
    try{
    return lastValueFrom(this.http.post<any>(this.domain+"/login/login", data, ));
    }

    catch{
      console.log('login error');
    }
  }

  // Define the function complaint - that takes care of complaint registration

  async complaint(data: any){
    try{
      return lastValueFrom(this.http.post<any>(this.domain+"/complaintreg/complaintreg", data));
    }
    catch{
      console.log('rescheck error');
    }
  }

  // Define the function getResidentDetails - that takes care of fetching resident details from the database

  async getResidentDetails(){
    try{
      return lastValueFrom(this.http.get<any>(this.domain+'/resident/getResidentDetails'));
    }

    catch{
      console.log('resident detail error');
    }
  }

  // Define the function getComplaintDetails - that takes care of fetching complaint details from the database

  async getComplaintDetails(){
    try{
      return lastValueFrom(this.http.get<any>(this.domain+'/complaint/getComplaintDetails'));
    }

    catch{
      console.log('Complaint detail error');
    }
  }

  // Define the function updateComplaintDetails - that looks into updating complaint status

  async updateComplaintDetails(data: any){
    try{
      return lastValueFrom(this.http.post<any>(this.domain+'/complaint/updateComplaintDetails', data));
    }

    catch{
      console.log('Complaint update error');
    }
  }

  // Define the function getUpdateDetails - that fetches updates' details from the database

  async getUpdateDetails(){
    try{
      return lastValueFrom(this.http.get<any>(this.domain+'/updates/getUpdateDetails'));
    }

    catch{
      console.log('Get update details Error');
    }
  }

  // Define the function insertUpdateDetails - that adds update details entered by the secretary

  async insertUpdateDetails(data: any){
    try{
      return lastValueFrom(this.http.post<any>(this.domain+'/updates/insertUpdateDetails', data));
    }

    catch{
      console.log('insert update http error');
    } 
  }

  // Define the function getRecurringPayDetails - that fetches recurring payment workers' details from the database

  async getRecurringPayDetails(){
    try{
      return lastValueFrom(this.http.get<any>(this.domain+'/recurringpay/getRecurringPayDetails'));
    }

    catch{
      console.log('get recurring pay http error');
    }
  }

  // Define the function insertRecurringPayDetails - that inserts a new record into the recurring payment workers DB

  async insertRecurringPayDetails(data: any){
    try{
      return lastValueFrom(this.http.post<any>(this.domain+'/recurringpay/insertRecurringPayDetails', data));
    }

    catch{
      console.log('insert recurring pay http error');
    }
  }

  // Define the function getNonRecurringPayDetails - that fetches non-recurring payment workers' details from the database

  async getNonRecurringPayDetails(){
    try{
      return lastValueFrom(this.http.get<any>(this.domain+'/nonrecurringpay/getNonRecurringPayDetails'));
    }

    catch{
      console.log('non recurring pay get http error');
    }
  }

  // Define the function insertNonRecurringPayDetails - that inserts a new record into the non-recurring payment workers DB

  async insertNonRecurringPayDetails(data: any){
    try{
      return lastValueFrom(this.http.post<any>(this.domain+'/nonrecurringpay/insertNonRecurringPayDetails', data));
    }

    catch{
      console.log('non recurring pay insert error');
    }
  }
}