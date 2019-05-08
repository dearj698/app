import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

import { IonicModule } from '@ionic/angular';

import { BookcasePage } from './bookcase.page';

const routes: Routes = [
  {
    path: '',
    component: BookcasePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
    providers: [NativePageTransitions],
  declarations: [BookcasePage]
})
export class BookcasePageModule {}
