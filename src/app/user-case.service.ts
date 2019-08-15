import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user';
import { Observable } from 'rxjs';
import { UserCase } from './user-case';

@Injectable({
    providedIn: 'root'
})
export class UserCaseService {
    private url: string;
    constructor(private httpclient: HttpClient) {
        this.url = 'https://young-depths-26026.herokuapp.com/usercase';
    }
    addCase(priority, email, anatheria, date, period, equipment, operationType, name) {
        const body = new HttpParams()
            .set('email', email)
            .set('priority', priority)
            .set('anatheria', anatheria)
            .set('date', date)
            .set('period', period)
            .set('equipment', equipment)
            .set('operationType', operationType)
            .set('name', name)
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'token': localStorage.getItem('token')
            })
        };
        this.httpclient.post(this.url+'/bookcase', body, httpOptions).subscribe(res =>{
            console.log('booked case'+res)
        }, (err: HttpErrorResponse)=>{
            console.log(err)
        })

    }
    getCases(): Observable<UserCase[]> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', localStorage.getItem('token'));
        return this.httpclient.get<UserCase[]>(this.url+'/getcases', {
            headers: headers
        });
    }
}
