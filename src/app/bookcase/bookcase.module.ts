import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

import { IonicModule } from '@ionic/angular';

import { BookcasePage } from './bookcase.page';
import {ListPage} from '../list/list.page';
import {ListPageModule} from '../list/list.module';

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
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
    providers: [NativePageTransitions],
  declarations: [BookcasePage]
})
export class BookcasePageModule {}
