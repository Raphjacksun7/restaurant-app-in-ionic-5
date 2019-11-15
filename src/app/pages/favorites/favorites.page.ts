import { Component, ViewChild } from '@angular/core';
import { NavController, IonItemSliding } from '@ionic/angular';

import {
  RestaurantService,
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
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('300ms', [animate('600ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class FavoritesPage {
  favorites: Array<any>;

  @ViewChild('slidingList', { static: false }) slidingList: IonItemSliding;

  constructor(
    public navCtrl: NavController,
    private service: RestaurantService
  ) {
    this.getFavorites();
  }

  itemTapped(favorite) {
    this.navCtrl.navigateForward('restaurant-detail/' + favorite.restaurant.id);
  }

  async deleteItem(favorite) {
    this.service.unfavorite(favorite)
      .then(() => {
          this.getFavorites();
      })
      .catch(error => alert(JSON.stringify(error)));

    await this.slidingList.close().then((a) => {
      console.log(a);
    });
  }

  getFavorites() {
    this.service.getFavorites()
      .then(data => this.favorites = data);
  }

}
