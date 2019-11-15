import { Component , ViewChild, OnInit} from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { NavController, ActionSheetController, ModalController, LoadingController , ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { CartPage } from './../modal/cart/cart.page';
import { DishDetailPage } from './../modal/dish-detail/dish-detail.page';
import {
  RestaurantService,
  DishService,
  TranslateProvider,
  CartService
} from '../../providers';

import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import { MessagePage } from '../modal/message/message.page';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.page.html',
  styleUrls: ['./restaurant-detail.page.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('300ms', [animate('600ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class RestaurantDetailPage implements OnInit{

   @ViewChild('slides', {static: false}) slider: IonSlides;

  segment = 0;
  qtd = 1;
  menus: any[];
  dish : Array<any> = [];
  restaurants: any = [];
  restaurant: any = [];
  commandes: Array<any> = []
  restaurantopts: String = 'menu';
  dishes: Array<any> = [];

  restoData: {
    id: any;
    nameresto: any;
    ttl: any;
    gps: any;
  }

  constructor (
    public asCtrl: ActionSheetController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public route: ActivatedRoute,
    public router: Router,
    private translate: TranslateProvider,
    private cartService: CartService,
    private restaurantService: RestaurantService,
    private dishService: DishService,
    private loadingController: LoadingController
  ) {}


  ngOnInit() {

  }


  ionViewWillEnter() {
    this.getRestaurants();
    this.getRestaurantsById();
  }


  async getRestaurantsById() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'crescent',
      duration: 10000
    });
    await loading.present();
    await this.restaurantService.getRestaurantsById(this.route.snapshot.paramMap.get('id'))

      .subscribe(res => {
        console.log(res)
        this.menus = res.content
        this.menus = JSON.parse(JSON.stringify(this.menus))
        console.log(this.menus)
        loading.dismiss()
      }, err => {
        console.log(err)
        loading.dismiss()
      });
  }
  
 getRestaurants() {
   
   this.restaurantService.getRestaurants()
      .subscribe(res => {
        this.restaurants = res.content
        this.restaurants = this.restaurants.filter((resto) => resto.id === +this.route.snapshot.paramMap.get('id') )
        this.restaurants = JSON.parse(JSON.stringify(this.restaurants))
        console.log(this.restaurants)
      }, err => {
        console.log(err)
      });
  }

  async dishDetail(dishId: any , supplements: any) {
    
    if(supplements.length === 0) {
      this.restaurantService.getRestaurantsById(this.route.snapshot.paramMap.get('id'))  
       .subscribe(res => {
         for(const dish of res.content){
          for(const produit of dish.produits){
            if(produit.id === +dishId) {
              this.dish = dish.produits.filter((prod) => prod.id === +dishId )
              this.dish = JSON.parse(JSON.stringify(this.dish))
            }
          }
         }
         console.log(this.dish)
       }, err => {
         console.log(err)
       });
       this.cartService.addtoCart(this.dish, this.qtd, 0,[]).then(async () => {
        console.log(this.dish)
        const toast = await this.toastCtrl.create({
            message: 'Plat ajouté au panier !',
            duration: 1500,
            position: 'top',
            closeButtonText: 'OK',
            showCloseButton: true
        })
        toast.present();
      })

      for (const order of this.dish ){
        this.commandes.push({
          commande_qte:this.qtd,
          commande_tab_nom:order.nom,
          commande_tab_pos:0,
          produit: {
            produit_ref:"",
            produit_nom:order.nom,
            produit_desc:order.description,
            produit_prix:order.prix,
            option: [],
          }
      })
    }
    this.cartService.addCommandestoCart(this.commandes).then( data => {  
    })
    this.commandes = []
    } else {
      const modal = await this.modalCtrl.create({
        component: DishDetailPage,
        componentProps: { dishId: dishId , supplements: supplements , idMenu : this.route.snapshot.paramMap.get('id')}
      });
      return await modal.present();
    }
  
  }


  async message() {
    const modal = await this.modalCtrl.create({
      component: MessagePage,
      componentProps: { restaurants: this.restaurants }
    });
    return await modal.present();
  }


  async share() {
    const actionSheet = await this.asCtrl.create({
      header: 'Share Restaurant on:',
      buttons: [{
        text: 'Facebook',
        role: 'facebook',
        icon: 'logo-facebook',
        handler: () => {
          console.log('Facebook clicked');
        }
      }, {
        text: 'Twitter',
        icon: 'logo-twitter',
        handler: () => {
          console.log('Twitter clicked');
        }
      }, {
        text: 'Instagram',
        icon: 'logo-instagram',
        handler: () => {
          console.log('Instagram clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  range(n: Array<any>) {
    return new Array(n);
  }


  async openCart() {

    for(const detail of this.restaurants){
      this.restoData = {
        id : detail.id,
        nameresto : detail.nom,
        ttl : detail.ttl,
        gps : detail.gps  
      }  
  }

    const modal = await this.modalCtrl.create({
      component: CartPage,
      componentProps: { restoData: this.restoData }
    });
    return await modal.present();
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

}
