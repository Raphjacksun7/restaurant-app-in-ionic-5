import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import {
  OrdersService,
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
  selector: 'app-latest-orders',
  templateUrl: './latest-orders.page.html',
  styleUrls: ['./latest-orders.page.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(100px,0,0)` }), { optional: true }),
        query(':enter', stagger('300ms', [animate('500ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})

export class LatestOrdersPage {
  lastOrders: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public ordersService: OrdersService
  ) {
    this.getOrders();
  }

  getOrders() {
    this.ordersService.getOrders()
      .then(data => {
        this.lastOrders = data;
      });
  }

}
