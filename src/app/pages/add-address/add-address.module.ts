import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { AddAddressPage } from './add-address.page';
import { MatDialogModule } from '@angular/material/dialog';
import { MapPage } from './map.page';

const routes: Routes = [
  {
    path: '',
    component: AddAddressPage
  },
  {
    path: 'add',
    component: MapPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes),
    MatDialogModule
  ],
  declarations: [AddAddressPage, MapPage],
  // entryComponents: [
  //   MapPage
  // ]
})
export class AddAddressPageModule { }
