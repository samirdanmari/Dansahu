import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AccountDetails } from '../api/account-details';
@Injectable({
  providedIn: 'root'

})
export class ReceiveQRService {

  getAccountInfo(): AccountDetails[]{
    return [{
      private AccountUrl= 

    }]
  }



  constructor() { }
}
