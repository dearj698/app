import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {User} from '../user';
import {Observable} from 'rxjs';
import {error} from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private url: string;
  constructor(private httpclient: HttpClient, private router: Router, public alertController: AlertController,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController, ) {
      this.url = 'http://192.168.0.104:8080/user?';
  }
    async alertFail() {
        const alert = await this.alertController.create({
            header: 'FAIL',
            subHeader: 'wrong email or password',
            message: 'please double check your email or password and retry',
            buttons: [{
                text : 'OK',
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
                }}]
        });

        await alert.present();
    }
  updateUser(password, lastname, firstname, email) {
      // tslint:disable-next-line:max-line-length
      this.httpclient.get(this.url + 'password=' + password + '&' + 'lastname=' + lastname + '&' + 'firstname=' + firstname + '&' + 'email=' + email + '&withcredentials=true' , {responseType: 'text'})
          .subscribe(
              data => {
                  console.log(data);
                  localStorage.setItem('passward', password);
                  localStorage.setItem('lastname', lastname);
                  localStorage.setItem('firstname', firstname);
                  localStorage.setItem('email', email);
              },
              (err: HttpErrorResponse) => {
                  console.log(err);
              });
  }
  checkUser(email, password) {
      this.httpclient.get('http://192.168.0.104:8080/user/login',  {
          params : new HttpParams().set( 'email', email).set('password', password),
          responseType: 'text'
      }).subscribe( async response => {
          console.log(response);
          if (response === '1') {
              const headers = new HttpHeaders().set('Content-Type', 'application/json');
              this.httpclient.get<User>('http://192.168.0.104:8080/user/getUser?email=' + email , {headers: headers}).subscribe( data => {
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
          console.error('log in fail: ' + error );
          this.alertFail();
      }));
  }

    public findAll(): Observable<User[]> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.httpclient.get<User[]>('http://192.168.0.104:8080/users', {headers : headers
            });
    }
}
