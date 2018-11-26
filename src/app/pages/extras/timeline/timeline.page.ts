import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {
  items = [
    {
      title: 'Confirm payment',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. delectus vitae nostrum eligendi quaerat dolore reprehenderit.',
      icon: 'calendar',
      dir: 'direction-r',
      time: { subtitle: '1/16/2018', title: '21:30' }
    },
    {
      title: 'Hotel Booked!',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. delectus vitae nostrum eligendi quaerat dolore reprehenderit.',
      icon: 'calendar',
      dir: 'direction-l',
      time: { subtitle: 'January', title: '29' }
    },
    {
      title: 'Travel Agent Contact',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. delectus vitae nostrum eligendi quaerat dolore reprehenderit.',
      icon: 'calendar',
      dir: 'direction-r',
      time: { title: 'Short Text' }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
