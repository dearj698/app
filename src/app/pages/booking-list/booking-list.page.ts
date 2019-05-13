import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';
import {Router} from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.page.html',
  styleUrls: ['./booking-list.page.scss'],
})

export class BookingListPage implements OnInit {
  bookings: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    private translate: TranslateProvider,
    public hotels: HotelProvider,
    private router: Router
  ) { }

  ngOnInit() {
    this.getBookings();
  }

  getBookings() {
    this.hotels.getBookings()
      .then(data => { this.bookings = data; });
  }
  go() {
      this.router.navigate(['bookcase']);
  }
}
