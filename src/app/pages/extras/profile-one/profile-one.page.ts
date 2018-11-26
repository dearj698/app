import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-one',
  templateUrl: './profile-one.page.html',
  styleUrls: ['./profile-one.page.scss'],
})
export class ProfileOnePage implements OnInit {
  posts = [];
  imageUrl: string = 'assets/img/webapp-bg.jpg';

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.posts[i] = {
        text: 'Post text ' + i,
        created_at: (i + 1),
      };
    }
  }

  ngOnInit() {
  }

}
