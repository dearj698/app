import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
    animations: [
        trigger('staggerIn', [
            transition('* => *', [
                query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                // tslint:disable-next-line:max-line-length
                query(':enter', stagger('300ms', [animate('600ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
            ])
        ])
    ]
})
export class ListPage implements OnInit {
    private surgeonList: Array<any>;
    private chosenName: string;
    @Input() value: number;
  constructor(private modalcontrol: ModalController) { }

  ngOnInit() {
      this.surgeonList = [
          {
          name: 'Abdul Naeem',
          icon: 'person'
      },
          {
              name: 'Abdul Naeem',
              icon: 'person'
          },
          {
              name: 'Abdul Naeem',
              icon: 'person'
          },
          {
              name: 'Abdul Naeem',
              icon: 'person'
          },
          {
              name: 'Abdul Naeem',
              icon: 'person'
          },
      ];
      console.log(this.value);
  }
  close(name: string) {
      this.modalcontrol.dismiss({result: name});
      console.log('name sent back ' + name);
  }

    select(name: string) {
      this.chosenName = name;
      this.close(name);
      console.log('selected ' + this.chosenName);
      console.log('bookcase from ' + localStorage.getItem('lastname'));
  }

}
