import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateProvider } from '../../providers';

import { Pages } from '../../interfaces/pages';

import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.page.html',
  styleUrls: ['./extras.page.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('300ms', [animate('600ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class ExtrasPage implements OnInit {
  public listExtras: Array<Pages>;

  constructor(
    public navCtrl: NavController,
    private translate: TranslateProvider
  ) {
    this.listExtras = [
      {
        title: 'Profile 1',
        url: '/extras/profile-one',
        direct: 'forward',
        icon: 'person'
      },
      {
        title: 'Profile 2',
        url: '/extras/profile-two',
        direct: 'forward',
        icon: 'person'
      },
      {
        title: 'Timeline',
        url: '/extras/timeline',
        direct: 'forward',
        icon: 'clock'
      },
      {
        title: 'Authentication (Login + Register)',
        url: '/extras/authentication',
        direct: 'forward',
        icon: 'lock'
      },
      {
        title: 'PopUp Menu',
        url: '/extras/popupmenu',
        direct: 'forward',
        icon: 'apps'
      },
      {
        title: 'Charts',
        url: '/extras/charts',
        direct: 'forward',
        icon: 'pie'
      },
      {
        title: 'Blog post',
        url: '/extras/post',
        direct: 'forward',
        icon: 'document'
      }
    ];
  }

  ngOnInit() {
  }

}
