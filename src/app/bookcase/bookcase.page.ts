import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-bookcase',
  templateUrl: './bookcase.page.html',
  styleUrls: ['./bookcase.page.scss'],
})
export class BookcasePage implements OnInit {
    options: NativeTransitionOptions = {
        direction: 'left',
        duration: 500,
        slowdownfactor: -1,
        slidePixels: 20,
        iosdelay: 50,
        androiddelay: 100,
        fixedPixelsTop: 0,
        fixedPixelsBottom: 60
    };
  constructor(private router: Router, private nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
  }
 go() {
     this.nativePageTransitions.slide(this.options);
      this.router.navigate(['surgeonList']);
 }
}
