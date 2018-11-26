import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Slides, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})

export class WalkthroughPage implements OnInit {
  @ViewChild(Slides) slides: Slides;
  showSkip = true;
  slideOpts = {
    effect: 'flip',
    speed: 1000
  };
  dir: string = 'ltr';

  slideList: Array<any> = [
    {
      title: 'What is Ho<strong>Steam</strong>?',
      description: 'A revolutionary app for London health centre, idea from doctor abdul , designed by Jerry ,Henry',
      image: 'assets/img/hotel-sp01.png',
    },
    {
      title: 'Why HoStream?',
      description: 'Do not waste your  time on waiting , book the appointment right away!',
      image: 'assets/img/hotel-sp02.png',
    },
    {
      title: 'Stay connected',
      description: 'Access to the board list, wherever you are',
      image: 'assets/img/hotel-sp03.png',
    }
  ];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public router: Router
  ) {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  onSlideNext() {
    this.slides.slideNext(1000, false);
  }

	onSlidePrev() {
    this.slides.slidePrev(300);
  }

  // onLastSlide() {
  // 	this.slides.slideTo(3, 300)
  // }

  openHomePage() {
    this.navCtrl.navigateRoot('/home');
    // this.router.navigateByUrl('/tabs/(home:home)');
  }

  openLoginPage() {
    this.navCtrl.navigateForward('/login');
  }

}
