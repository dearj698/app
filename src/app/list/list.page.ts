import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {UserService} from '../services/user.service';
import {type} from 'os';
import {HttpClient} from '@angular/common/http';
import {json} from '@angular-devkit/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
    animations: [
        trigger('staggerIn', [
            transition('* => *', [
                query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
                // tslint:disable-next-line:max-line-length
                query(':enter', stagger('150ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
            ])
        ])
    ]
})
export class ListPage implements OnInit {
    private surgeonList: Array<any>;
    private chosenName: string;
    private arraylist = '';
    @Input() value: number;
  constructor(private modalcontrol: ModalController, private httpclient: HttpClient) {
  }

  ngOnInit() {
      this.surgeonList = [
      ];
      console.log(this.value);
      this.httpclient.get('http://localhost:8080/users' , {responseType: 'json'}).subscribe(
          data => {
              console.log(typeof (data));
              for (var i  = 0 ; i < (<Array<any>>data).length; i++) {
                  this.surgeonList.push(
                      {
                          name: data[i].lastname,
                          icon: 'person'
                      }
                  );
              }
          }
      );
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
