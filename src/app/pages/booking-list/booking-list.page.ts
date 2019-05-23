import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';
import {Router} from '@angular/router';
import {UserCase} from '../../user-case';
import {UserCaseService} from '../../user-case.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.page.html',
  styleUrls: ['./booking-list.page.scss'],
})

export class BookingListPage implements OnInit {
  bookings: UserCase[] = [];
  constructor(
    public navCtrl: NavController,
    private translate: TranslateProvider,
    private router: Router,
    private usercase: UserCaseService
  ) { }

  ngOnInit() {
    this.getBookings();
  }

  getBookings() {
      this.usercase.getCases().subscribe( data => {
          this.bookings = data;
          console.log('get all cases: ' + JSON.stringify(this.bookings));
      },   (error: any) => {
          console.log('error', error);
      });
  }
  go() {
      this.router.navigate(['bookcase']);
  }
}
