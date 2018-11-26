import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  user = {
    name: 'João Firmino',
    profileImage: 'assets/img/avatar.jpeg',
    coverImage: 'assets/img/webapp-bg.jpg',
    occupation: 'Designer',
    location: 'Seattle, WA',
    description: 'A wise man once said: The more you do something, the better you will become at it.',
    followers: 456,
    following: 1052,
    posts: 35
  };

  post = {
    postImageUrl: 'assets/img/webapp-bg.jpg',
    title: 'Lorem Ipsum Donor',
    text: 'I believe in being strong when everything seems to be going wrong. I believe that happy girls are the prettiest girls. I believe that tomorrow is another day and I believe in miracles.',
    date: 'November 5, 2016',
    likes: 12,
    comments: 4,
    timestamp: '11h ago'
  };

  constructor() { }

  ngOnInit() {
  }

}
