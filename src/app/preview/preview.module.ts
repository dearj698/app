import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PreviewPage } from './preview.page';
import {BookingListPage} from '../pages/booking-list/booking-list.page';
import {BookingListPageModule} from '../pages/booking-list/booking-list.module';

const routes: Routes = [
  {
    path: '',
    component: PreviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      BookingListPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PreviewPage]
})
export class PreviewPageModule {}
