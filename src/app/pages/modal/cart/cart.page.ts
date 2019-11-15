import { Component, ViewChild, Input , OnInit} from '@angular/core';
import { NavController, ModalController, IonItemSliding } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

import {
  DishService,
  CartService,
  TranslateProvider
} from '../../../providers';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit{
  orders: Array<any> = []
  totalVal = 0
  orderCounter = 0
  commandes: Array<any> = []
  paniers: Array<any> = []
  comment: ' '
  
  @Input() restoData: any ;
  @ViewChild('slidingList', { static: false }) slidingList: IonItemSliding;


  

  constructor(
    public navCtrl: NavController,
    public dishService: DishService,
    public cartService: CartService,
    public route: Router,
    private modalCtrl: ModalController
  ) {
    this.getOrders();
    this.getCommandes()
   
  }

  ngOnInit() {
  }

  async removeOrder (order) {
    this.cartService.removefromCart(order).then(() => {
          this.getOrders();
      }).catch(error => alert(JSON.stringify(error)));

    await this.slidingList.close().then((a) => {});
  }

  async removeCommande (commandes) { 
    this.cartService.removefromCommandes(commandes).then(() => {
      this.getCommandes();
  }).catch(error => alert(JSON.stringify(error)));
  await this.slidingList.close().then((a) => {});
  }


  getOrders () {
    this.cartService.getOrders().then(orders => {
      this.orders = orders
      console.log(this.orders)
      this.totalVal = 0;
      let prix = 0
      this.orders.forEach((val, i) => {
        for (const price of val.order ){
          prix = price.prix
        }
        this.totalVal = this.totalVal + ((prix * val.qtd) + (val.supplementPrice * val.qtd));
        console.log(prix)
      })
    })
  }

  // minus adult when click minus button
  minusQtd(order) {
    this.cartService.editQtdOrder(order, 'minus')
      .then(() => {
          this.getOrders();
      })
      .catch(error => alert(JSON.stringify(error)));
  }

  // plus adult when click plus button
  plusQtd(order) {
    this.cartService.editQtdOrder(order, 'plus')
      .then(() => {
          this.getOrders();
      })
      .catch(error => alert(JSON.stringify(error)));
  }

  openCheckout() {
    Object.assign(this.paniers, {"panier_commande": this.commandes})
    Object.assign(this.paniers, {"ttl": this.restoData.ttl})
    Object.assign(this.paniers, {"panier_ht": this.totalVal})
    Object.assign(this.paniers, {"restaurant": this.restoData.nameresto})
    Object.assign(this.paniers, {"restaurant_id": this.restoData.id})
    Object.assign(this.paniers, {"r_lat": this.restoData.gps.lat})
    Object.assign(this.paniers, {"r_lng": this.restoData.gps.lng})
    Object.assign(this.paniers, {"commande_ref": "cmd_alioshanehme95@gmail.com_156587498596520141565874985966"})
    Object.assign(this.paniers, {"comment": this.comment})
    let navExtra: NavigationExtras = {
      state: {
        orders : this.paniers
      }
    }
    console.log(this.paniers)
    this.route.navigate(['checkout'],navExtra)
    this.modalCtrl.dismiss()
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  getCommandes() {
    this.cartService.getCommandes().then( commandes => {
      this.commandes = commandes
      })
  }

   categories: Array<any> = [ 
  {
    "panier_commande":
    [
      {
      "commande_qte":1,
      "commande_tab_nom":"Les sandwich",
      "commande_tab_pos":0,
      "produit":
              {
                "produit_ref":"",
                "produit_nom":"Club sandwich",
                "produit_desc":"",
                "produit_prix":4000,
                "option":[]
              }
    },
    {
    "commande_qte":1,
    "commande_tab_nom":"tab0",
    "commande_tab_pos":0,
    "produit":
            {
              "produit_ref":"",
              "produit_nom":"Pain normal",
              "produit_desc":"",
              "produit_prix":3500,
              "option":
                    [
                      {"option_nom":"oignons",
                       "option_prix":0
                      },
                      {"option_nom":"poulet",
                       "option_prix":0
                      },
                      {"option_nom":"mayonnaise",
                       "option_prix":0
                      },
                      {"option_nom":"piment vert",
                       "option_prix":0
                      },
                      {"option_nom":"beurre",
                       "option_prix":0
                      }
                    ]
              }
    },
    {
      "commande_qte":1,
      "commande_tab_nom":"tab0",
      "commande_tab_pos":0,
      "produit":
              {
                "produit_ref":"",
                "produit_nom":"energy drink",
                "produit_desc":"",
                "produit_prix":1800,
                "option":[]
              }
    }
  ],
  "ttl":"25 -35mins",
  "frais":200,
  "tel":"96666666",
  "panier_ht":9300,
  "panier_payement":"Payement à la livraison",
  "produit_list":"1X Club sandwich; 1X Pain normal; 1X energy drink; ",
  "restaurant":"Spoon",
  "restaurant_id":"2",
  "livraison_adresse":"les cocotiers\n\n(cotonou) route de l'aéroport, immeuble BOA, Vlisco, NSIA",
  "lat":"6.353944114508463",
  "lng":"2.397935427725315",
  "r_lat":6.35,
  "r_lng":2.386,
  "commande_ref":"cmd_alioshanehme95@gmail.com_156587498596520141565874985966",
  "comment":"Plus de piment",
  "demande_monnaie":"Demande de monnaie sur 10000"
  }
]

}
