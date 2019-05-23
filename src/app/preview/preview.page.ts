import {Component, Input, OnInit} from '@angular/core';
import {UserCase} from '../user-case';
import {AlertController, LoadingController, ModalController, ToastController} from '@ionic/angular';
import {UserCaseService} from '../user-case.service';
import {Router} from '@angular/router';
import {BookingListPage} from '../pages/booking-list/booking-list.page';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {
    @Input() userCase: UserCase;
    date: string;
    operationType: string;
    period: string;
    name: string;
    priority: string;
    equipment: string;
    anatheria: string;
    displayBtn = false;
  constructor(private modalcontrol: ModalController, private userCaseService: UserCaseService) { }

  ngOnInit() {
      console.log('Preview page receives  case ' + JSON.stringify(this.userCase) );
      this.date = this.userCase.date;
      this.operationType = this.userCase.operationType;
      this.period = this.userCase.period;
      this.name = this.userCase.name;
      this.priority = this.userCase.priority;
      this.equipment = this.userCase.equipment;
      this.anatheria = this.userCase.anatheria;
  }
    close() {
        this.modalcontrol.dismiss({userCase: this.userCase});
    }
    confirm() {
      this.displayBtn = true;
      if (this.displayBtn === true) {
          this.modalcontrol.dismiss({userCase: 'true'});
      }
      this.bookcase();
    }
    bookcase() {
        // tslint:disable-next-line:max-line-length
        this.userCaseService.addCase(this.priority, localStorage.getItem('email'), this.anatheria, this.date, this.period, this.equipment, this.operationType, this.name);
    }
}
