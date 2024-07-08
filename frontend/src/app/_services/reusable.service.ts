import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReusableService {

  // Define the variable sessionStorage - datatype Subject

  private sessionStorage = new Subject<boolean>();
  constructor() { }

  // Define the function setItem

  setItem(key: string, data: any){
    sessionStorage.setItem(key, data);
    this.sessionStorage.next(true);
  }
}
