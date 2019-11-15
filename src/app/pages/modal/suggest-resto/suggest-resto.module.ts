import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuggestRestoPage } from './suggest-resto.page';

const routes: Routes = [
  {
    path: '',
    component: SuggestRestoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuggestRestoPage],
  entryComponents: [SuggestRestoPage]
})
export class SuggestRestoPageModule {}
