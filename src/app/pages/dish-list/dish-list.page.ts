import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import {
  DishService,
  TranslateProvider
} from '../../providers';

import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.page.html',
  styleUrls: ['./dish-list.page.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(-100px,0,0)` }), { optional: true }),
        query(':enter', stagger('300ms', [animate('500ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class DishListPage {
  dishes: Array<any>;

  constructor(
    public navCtrl: NavController,
    private dishService: DishService
  ) {
    this.dishes = this.dishService.findAll();
  }

}
