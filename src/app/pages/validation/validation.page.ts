import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as geolib from 'geolib';

import {
  ValidationService,
  TranslateProvider,
  AuthService
} from '../../providers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.page.html',
  styleUrls: ['./validation.page.scss'],
})

export class ValidationPage implements OnInit{
  fsfs;
  commandData:any = [];
  userAddress: any;
  token: any;
  payement:any;
  tel: any;
  gps_lat = 0;
  gps_long = 0;
  fraisLivraison: number;
  commande :any = []

  constructor(
    public navCtrl: NavController,
    public validationService: ValidationService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private authService: AuthService,
    public route: Router,
    private storage: Storage,
  ) {
    this.getOrders()
  }

  ngOnInit() {
    this.authService.getToken().then(() => {
      if(this.authService.isLoggedIn) {
        this.token = this.authService.token
        this.tel = this.authService.tel
        console.log(this.tel)
      }
    })
    this.authService.getDistric().then(() => {
      if(this.authService.isLoggedIn) {
        this.userAddress = this.authService.userAddress
      }
    })
    this.authService.getGpsLat().then(() => {
      if(this.authService.isLoggedIn) {
        this.gps_lat = this.authService.gps_lat
      }
    })
    this.authService.getGpsLng().then(() => {
      if(this.authService.isLoggedIn) {
        this.gps_long = this.authService.gps_lng
      }
    })

    this.getFraisLivraison()
    this.getOrders()
    this.getCommandes()
    
  }

  ionViewWillEnter(){
    
  }

  getOrders() {
    if(this.route.getCurrentNavigation().extras.state) {
      this.commandData = this.route.getCurrentNavigation().extras.state.orders
      console.log(this.commandData)
      Object.assign(this.commandData, {"livraison_adresse": this.userAddress})
      Object.assign(this.commandData, {"tel": this.tel})

    }
  }

  getFraisLivraison() {
    this.fraisLivraison = ((geolib.getDistance( 
      { latitude: this.gps_lat, longitude: this.gps_long },
      { latitude: this.commandData.r_lat, longitude: this.commandData.r_lng },
    ) ) * 100) / 1000
  }
// avocegamouraph@gmail.com
  getCommandes(){
    for(const cmd of this.commandData.panier_commande) {
      console.log(this.commandData.panier_commande)
      console.log(cmd.produit)
        // for(const c of cmd.produit) {
        //   console.log(cmd.produit)
        //   this.commande.push({
        //     qte:cmd.commande_qte,
        //     name:cmd.commande_tab_nom,
        //     price:c.produit_prix
        //   })
        // }
    }
    console.log(this.commande)
  }

  commandes(){
    this.commandData =  JSON.stringify(this.commandData)
    this.validationService.validCommand(this.commandData,this.token)
    .subscribe( async data => {
      console.log(data)
      const toast = await this.toastCtrl.create({
        message: 'Vous avez une commande en cours !',
        duration: 1500
      })
      toast.present()
    },async err => {
      const toast = await this.toastCtrl.create({
        message: "Une erreur s'est produit #403 ",
        duration: 3500
      })
      toast.present()
      console.log(err)
    })
    this.navCtrl.navigateForward('restaurant-list/');
  }
 

}
