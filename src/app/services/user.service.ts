import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { User } from '../user';
import { Observable } from 'rxjs';
import { error } from 'selenium-webdriver';
import { RequestOptions } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private url: string;
    constructor(private httpclient: HttpClient, private router: Router, public alertController: AlertController,
        public toastCtrl: ToastController,
        public loadingCtrl: LoadingController, ) {
        this.url = 'https://young-depths-26026.herokuapp.com/user';
    }
    async alertFail() {
        const alert = await this.alertController.create({
            header: 'FAIL',
            subHeader: 'wrong email or password',
            message: 'please double check your email or password and retry',
            buttons: [{
                text: 'OK',
                handler: async () => {
                    const loader = await this.loadingCtrl.create({
                        duration: 1000
                    });

                    loader.onWillDismiss().then(async l => {
                        const toast = await this.toastCtrl.create({
                            showCloseButton: true,
                            duration: 3000,
                            position: 'bottom'
                        });
                    });
                }
            }]
        });

        await alert.present();
    }

    async alertSuccess() {
        const alert = await this.alertController.create({
            header: 'Success',
            subHeader: 'registered successful',
            message: 'please login now',
            buttons: [{
                text: 'OK',
                handler: async () => {
                    const loader = await this.loadingCtrl.create({
                        duration: 1000
                    });

                    loader.onWillDismiss().then(async l => {
                        const toast = await this.toastCtrl.create({
                            showCloseButton: true,
                            duration: 1000,
                            position: 'bottom'
                        });
                    });
                }
            }]
        });

        await alert.present();
    }
    updateUser(password, lastname, firstname, email) {

        const body = new HttpParams()
            .set('email', email)
            .set('password', password)
            .set('firstname', firstname)
            .set('lastname', lastname)
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };
        return this.httpclient.post(this.url + '/register', body.toString(), httpOptions).subscribe(res => {
            console.log(res);
        })

    }
    checkUser(email, password) {
        const body = new HttpParams()
            .set('email', email)
            .set('password', password)
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        }; 
        interface response  {
            msg:string;
            Authorization:string;
        }
        this.httpclient.post<response>('https://young-depths-26026.herokuapp.com/user/login', body.toString(), httpOptions).subscribe(async res => {
              if (res !== null) {
                  localStorage.setItem('token' ,res.Authorization);
                  console.log('receive token' + localStorage.getItem('token'));
                  const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token' , localStorage.getItem('token'));
                  this.httpclient.get<User>('https://young-depths-26026.herokuapp.com/user/getUserByEmail/' + email , {headers: headers}).subscribe( data => {
                      console.log('receive user: ' + JSON.stringify(data));
                      localStorage.setItem('firstname', data.firstname);
                      localStorage.setItem('lastname', data.lastname);
                  });
                  localStorage.setItem('email', email);
                  this.router.navigate(['/home']);
                  const loader = await this.loadingCtrl.create({
                      duration: 1000
                  });

                  loader.present();
              } else {
                  console.log('login fail');
                  this.alertFail();
              }
            // tslint:disable-next-line:no-shadowed-variable
        }, ((error: any) => {
            console.error('log in fail: ' + error);
            this.alertFail();
        }));
    }

    public findAll(): Observable<User[]> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', localStorage.getItem('token'));
        return this.httpclient.get<User[]>('https://young-depths-26026.herokuapp.com/user/getUsers', {
            headers: headers
        });
    }
}
