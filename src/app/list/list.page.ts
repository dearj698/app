import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {UserService} from '../services/user.service';
import {type} from 'os';
import {HttpClient} from '@angular/common/http';
import {json} from '@angular-devkit/core';
import {User} from '../user';
import {catchError} from 'rxjs/operators';
import {error} from 'selenium-webdriver';


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
    users: User[] = [];
    @Input() value: number;
  constructor(private modalcontrol: ModalController, private userService: UserService , private http: HttpClient) {
  }

  ngOnInit() {
      this.userService.findAll().subscribe(
          data => {
              console.log('type of response ' + JSON.stringify(data));
              this.users = data;
              // tslint:disable-next-line:no-shadowed-variable
          },   (error: any) => {
              console.log('error', error);
          }
      );
      console.log('user list content: ' + this.users);
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
