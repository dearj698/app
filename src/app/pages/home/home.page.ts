import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
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
    items = [
        {
            name: 'one',
            slides: [{
                title: 'Dreams Adventure',
                imageUrl: 'assets/img/img1.jpg',
                songs: 2,
                private: false
            },
                {
                    title: 'For the Weekend',
                    imageUrl: 'assets/img/img1.jpg',
                    songs: 4,
                    private: false
                },
                {
                    title: 'Family Time',
                    imageUrl: 'assets/img/img1.jpg',
                    songs: 5,
                    private: true
                },
                {
                    title: 'My Trip',
                    imageUrl: 'assets/img/img1.jpg',
                    songs: 12,
                    private: true
                }]
        },
    ];
    constructor(private nav: NavController, private router: Router, private nativePageTransitions: NativePageTransitions) {}
    ngOnInit() {
    }
    go() {
        this.nativePageTransitions.slide(this.options);
        this.router.navigate(['boardlist']);
    }
    goBookcase() {
        this.nativePageTransitions.slide(this.options);

        this.router.navigate(['bookcase']);
    }
}
