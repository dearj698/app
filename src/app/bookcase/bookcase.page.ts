import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import {ModalController} from '@ionic/angular';
import {ListPage} from '../list/list.page';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-bookcase',
  templateUrl: './bookcase.page.html',
  styleUrls: ['./bookcase.page.scss'],
})
export class BookcasePage implements OnInit {
    private priority: number;
    private prioritySelected: number;
    private nameSelected: string;
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
              private modalcontrol: ModalController) { }

  ngOnInit() {
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
}
