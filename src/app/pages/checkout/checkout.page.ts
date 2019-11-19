import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import {
  OrdersService,
  CartService,
  TranslateProvider
} from '../../providers';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})

export class CheckoutPage {
  cashOnDelived;
  checkoutData: any;
  paymethods = 'cashOnDelived';
  totalVal = 0;
  orderNumber: number = Math.floor(Math.random() * 10000);

  constructor(
    public navCtrl: NavController,
    public ordersService: OrdersService,
    public cartService: CartService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private alertController: AlertController,
    public route: Router,
    private storage: Storage,
  ) {
    this.getOrders()
  }

  ionViewWillEnter() {
    //this.getOrders();
  }

  getOrders() {
    if(this.route.getCurrentNavigation().extras.state) {
      this.checkoutData = this.route.getCurrentNavigation().extras.state.orders
      console.log(this.checkoutData)
    }
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Besion de monnaie',
      message: 'Je souhaite avoir la monnaie sur...',
      inputs: [
        {
          name: 'monnaie',
          type: 'number',
          placeholder: 'Entrer un montant',
          max:10000,
        }
      ],
      buttons: [
        {
          text: 'Je ne veux pas de monnaie',
          cssClass: 'secondary',
          handler: () => {
            Object.assign(this.checkoutData, {"demande_monnaie": "Je ne veux pas de monnaie"})
            let navExtra: NavigationExtras = {
              state: {
                orders : this.checkoutData
              }
            }
            this.route.navigate(['myadress2'],navExtra)
            Object.assign(this.checkoutData, {"panier_payement": "Payement à la livraison"})
          }
        }, {
          text: 'Valider',
          handler: (alertData) => {
            if(alertData.monnaie > 0) {
              Object.assign(this.checkoutData, {"demande_monnaie": "Demande de monnaie sur "+alertData.monnaie})
              let navExtra: NavigationExtras = {
                state: {
                  orders : this.checkoutData
                }
              }
              this.route.navigate(['myadress2'],navExtra)
              Object.assign(this.checkoutData, {"panier_payement": "Payement à la livraison"})
            }
          }
        }
      ]
    });

    await alert.present();
  }

}
