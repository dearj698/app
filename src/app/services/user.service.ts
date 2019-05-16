import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {User} from '../user';
import {Observable} from 'rxjs';

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
    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Successful',
            subHeader: 'Registered into system',
            message: 'you will be navigate to home page',
            buttons: [{
                text : 'OK',
                handler: async () => {
                    const loader = await this.loadingCtrl.create({
                        duration: 2000
                    });

                    loader.present();
                    loader.onWillDismiss().then(async l => {
                        const toast = await this.toastCtrl.create({
                            showCloseButton: true,
                            duration: 3000,
                            position: 'bottom'
                        });

                        toast.present();
                    });
                }}]
        });

        await alert.present();
        this.router.navigate(['home']);
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
                        duration: 2000
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
      this.httpclient.get(this.url + 'password=' + password + '&' + 'lastname=' + lastname + '&' + 'firstname=' + firstname + '&' + 'email=' + email + '&withcredentials=true' , {responseType: 'text'})
          .subscribe(
              data => {
                  console.log(data);
                  this.presentAlert();
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
      }).subscribe( response => {
          console.log(response);
          if (response === '1') {
                  this.router.navigate(['/home']);
                  this.presentAlert();
          } else {
              console.log('login fail');
              this.alertFail();
          }
      });
  }

    public findAll(): Observable<User[]> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.httpclient.get<User[]>('http://192.168.0.104:8080/users', {headers : headers
            });
    }
}
