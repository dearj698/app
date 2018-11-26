import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-boardlist',
    templateUrl: './boardlist.page.html',
    styleUrls: ['./boardlist.page.scss'],
})
export class BoardlistPage implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
        console.log('loaded board_list');
    }
    go() {
        this.router.navigate(['home']);
    }

}
