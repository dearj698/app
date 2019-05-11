import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private passward: string;
    private lastname: string;
    private firstname: string;
    private email: string;
    private url: string;
  constructor(private httpclient: HttpClient, private router: Router, public alertController: AlertController) {
      this.url = 'http://localhost:8080/user?';
  }
    async presentAlert() {
        let resetTimer = false;
        const alert = await this.alertController.create({
            header: 'Successful',
            subHeader: 'Registered into system',
            message: 'you will be navigate to home page',
            buttons: [{
                text : 'OK',
                handler: () => {
            resetTimer = true;
        }}]
        });

        await alert.present();
        this.router.navigate(['home']);
    }
  updateUser(password, lastname, firstname, email) {
      // tslint:disable-next-line:max-line-length
      this.httpclient.get(this.url + 'password=' + password + '&' + 'lastname=' + lastname + '&' + 'firstname=' + firstname + '&' + 'email=' + email + '&withcredentials=true')
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
}
