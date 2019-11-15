import { Component } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  LoadingController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

import {
  RestaurantService, AuthService} from '../../providers';
import { CartPage } from './../modal/cart/cart.page';
import { SuggestRestoPage } from './../modal/suggest-resto/suggest-resto.page';
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.page.html',
  styleUrls: ['./restaurant-list.page.scss'],
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('200ms', [animate('600ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class RestaurantListPage {
  restaurants: any = [];
  searchKey: string;
  viewMode = 'list';
  proptype: any;
  label = '';
  from: String;
  agmStyles: any[] = environment.agmStyles;
  userAddress: string;
  mydata: boolean = false;


 
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public service: RestaurantService,
    public toastCtrl: ToastController,
    public route: ActivatedRoute,
    public router: Router,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    private authService: AuthService,
    public loadingCtrl: LoadingController,

  ) { }

  ionViewWillEnter() {
    this.authService.getDistric().then(() => {
      this.mydata = false
      if(this.authService.isLoggedIn) {
        this.mydata = true
        this.userAddress = this.authService.userAddress
      }
    })
    this.menuCtrl.enable(true);
    this.getRestaurants();
  }

  ionViewDidLoad()
   {
    this.authService.getDistric().then(() => {
      this.mydata = false
      if(this.authService.isLoggedIn) {
        this.mydata = true
        this.userAddress = this.authService.userAddress
      }
    })
      this.declareRestaurant();
   }

 


  async getRestaurants() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'crescent',
      duration: 1500
    });
    await loading.present()
    await this.service.getRestaurants()
      .subscribe(res => {
        console.log(res)
        this.restaurants = res.content
        this.restaurants = JSON.parse(JSON.stringify(this.restaurants))
        loading.dismiss()
      }, err => {
        console.log(err)
        loading.dismiss()
      });
  }


  declareRestaurant() : void
   {
    this.getRestaurants()
   }

  onInput(searchTerm: any) {
    this.declareRestaurant
    if (searchTerm.trim() !== '')
      {
         this.restaurants = this.restaurants.filter((item) => {
          return ((item.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
      (item.adresse .toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || 
      (item.speciality .toLowerCase().indexOf(searchTerm.toLowerCase()) > -1));
        })
      }else{
        this.restaurants = this.ionViewDidLoad()
      }
  }
 

  async openRestaurantListPage() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navCtrl.navigateForward('restaurant-list/');
    });
  }

  async openCommandes() {
    this.navCtrl.navigateForward('latest-orders');
  }

  async suggest() {
    const modal = await this.modalCtrl.create({
      component: SuggestRestoPage
    });
    return await modal.present();
  }

}
