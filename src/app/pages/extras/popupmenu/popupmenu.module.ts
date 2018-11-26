import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { PopmenuComponent } from './../../../components/popmenu/popmenu.component';
import { PopupmenuPage } from './popupmenu.page';

const routes: Routes = [
  {
    path: '',
    component: PopupmenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [PopupmenuPage, PopmenuComponent]
})
export class PopupmenuPageModule {}
