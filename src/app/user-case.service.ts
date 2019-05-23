import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from './user';
import {Observable} from 'rxjs';
import {UserCase} from './user-case';

@Injectable({
  providedIn: 'root'
})
export class UserCaseService {
    private url: string;
  constructor(private httpclient: HttpClient) {
      this.url = 'http://192.168.0.103:8080/bookcase?';
  }
  addCase(priority, email, anatheria, date , period, equipment, operationType , name) {
      // tslint:disable-next-line:max-line-length
      const headers = new HttpHeaders().set('token' , localStorage.getItem('token'));
      this.httpclient.get(this.url + 'priority=' + priority + '&email=' + email + '&anatheria=' + anatheria + '&date=' +
          date + '&period=' + period + '&equipment=' + equipment + '&operationType=' + operationType + '&name=' + name , {headers : headers
      } ).subscribe(data => {
              console.log('booked case' + JSON.stringify(data));
      },
          (err: HttpErrorResponse) => {
              console.log(err);
          });
  }
  getCases(): Observable<UserCase[]> {
      const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token' , localStorage.getItem('token'));
      return this.httpclient.get<UserCase[]>('http://192.168.0.103:8080/getCases', {headers : headers
      });
  }
}
