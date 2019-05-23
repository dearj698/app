import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import {AlertController, LoadingController, ModalController, ToastController} from '@ionic/angular';
import {ListPage} from '../list/list.page';
import {UserService} from '../services/user.service';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserCase} from '../user-case';
import any = jasmine.any;
import {PreviewPage} from '../preview/preview.page';

@Component({
  selector: 'app-bookcase',
  templateUrl: './bookcase.page.html',
  styleUrls: ['./bookcase.page.scss'],
})
export class BookcasePage implements OnInit {
    onBookForm: FormGroup;
    private priority: number;
    private prioritySelected: number;
    private nameSelected: string;
    private showBtn = false;
    private userCase: UserCase = {
        date: ' ',
    operationType: ' ',
    period: ' ',
    name: ' ',
    priority: ' ',
    equipment: ' ',
    anatheria: ' ',
    };
    options: NativeTransitionOptions = {
        direction: 'left',
        duration: 100,
        slowdownfactor: -1,
        slidePixels: 20,
        iosdelay: 50,
        androiddelay: 100,
        fixedPixelsTop: 0,
        fixedPixelsBottom: 60
    };
  constructor(private router: Router,
              private nativePageTransitions: NativePageTransitions,
              private modalcontrol: ModalController,
              private formBuilder: FormBuilder,
              public alertController: AlertController,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
      this.onBookForm = this.formBuilder.group({
          'date': [null, Validators.compose([
          ])],
          'operationType': [null, Validators.compose([
          ])],
          'period': [null, Validators.compose([
          ])],
          'equipment': [null, Validators.compose([
          ])],
          'anatheria': [null, Validators.compose([
          ])],
          'prioritySelected': [null, Validators.compose([])]
      });
  }
    async go() {
        const modal = await this.modalcontrol.create({
            component: ListPage,
            componentProps: { value: 123 }
        });
        modal.onDidDismiss()
            .then((data) => {
                const sample = data;
                console.log(JSON.stringify(sample));
                this.nameSelected = sample.data.result;
            });
        return await modal.present();
    }
    show(priority: number) {
      this.priority = priority;
      console.log(priority);
    }
    async nextPage() {
        this.userCase.date = this.onBookForm.get('date').value;
        this.userCase.anatheria = this.onBookForm.get('anatheria').value;
        this.userCase.equipment = this.onBookForm.get('equipment').value;
        this.userCase.name = this.nameSelected;
        this.userCase.operationType = this.onBookForm.get('operationType').value;
        this.userCase.period = this.onBookForm.get('period').value;
        this.userCase.priority = this.priority.toString();
        const modal = await this.modalcontrol.create({
            component: PreviewPage,
            componentProps: {userCase: this.userCase}
        });
        modal.onDidDismiss()
            .then((data) => {
                console.log('load data back: ' + JSON.stringify(data));
                if (data.data.userCase === 'true') {
                    this.showBtn = true;
                }
            });
        console.log('created usercase: ' + JSON.stringify(this.userCase));
        return await modal.present();
    }
    gotoList() {
      this.alertSuccess();
      this.router.navigate(['booking-list']);
    }

    async alertSuccess() {
        const alert = await this.alertController.create({
            header: 'Success',
            subHeader: 'Book successful',
            buttons: [{
                text : 'OK'}]
        });

        alert.present();
    }
}
