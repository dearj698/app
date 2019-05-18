import {Component, Input, OnInit} from '@angular/core';
import {UserCase} from '../user-case';
import {ModalController} from '@ionic/angular';

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
  constructor(private modalcontrol: ModalController) { }

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
    }
}
