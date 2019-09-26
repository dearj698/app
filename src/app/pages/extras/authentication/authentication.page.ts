import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { TranslateProvider } from '../../../providers';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {
  onLoginForm: FormGroup;
  onRegisterForm: FormGroup;
  authSegment: String = 'login';

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private translate: TranslateProvider,
    private formBuilder: FormBuilder,
    private router: Router,
    private Userclient: UserService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.onLoginForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
    this.onRegisterForm = this.formBuilder.group({
      'FirstName': [null, Validators.compose([
        Validators.required
            ])],
      'LastName':  [null, Validators.compose(([
          Validators.required
      ]))],
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }
    async login() {
      const loading = await this.loadingController.create({
          message: 'Logining in....',
          duration: 2000
      });
      await loading.present();
      this.Userclient.checkUser(this.onLoginForm.get('email').value, this.onLoginForm.get('password').value);
  }
  async register() {
      const loading = await this.loadingController.create({
          message: 'regstering....',
          duration: 100
      });
      await loading.present();

      // tslint:disable-next-line:max-line-length
    this.Userclient.updateUser(this.onRegisterForm.get('password').value, this.onRegisterForm.get('LastName').value, this.onRegisterForm.get('FirstName').value, this.onRegisterForm.get('email').value);
  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: this.translate.get('app.pages.login.label.forgot'),
      message: this.translate.get('app.pages.login.text.forgot'),
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: this.translate.get('app.label.email')
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: this.translate.get('app.pages.login.text.sended'),
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

}
