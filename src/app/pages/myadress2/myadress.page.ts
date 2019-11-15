import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { TranslateProvider, AuthService ,AddressService } from '../../providers';
import { Router, NavigationExtras } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-myadress',
  templateUrl: './myadress.page.html',
  styleUrls: ['./myadress.page.scss'],
})
export class MyAdressPage implements OnInit {

  address: any[] = [];
  token: any;
  addressData: any;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private service: AddressService,
    private auth: AuthService,
    public route: Router,
    private storage: NativeStorage,
    private translate: TranslateProvider
    ) { }

  ngOnInit() {
    this.getUserAddress()
    this.getOrders()
  }

  getOrders() {
    if(this.route.getCurrentNavigation().extras.state) {
      this.addressData = this.route.getCurrentNavigation().extras.state.orders
      console.log(this.addressData)
    }
  }


  ionViewWillEnter() {
   this.getUserAddress()
  }

  async getUserAddress() {
    this.auth.getToken().then(() => {
      if(this.auth.isLoggedIn) {
        this.token = this.auth.token

      }
    })
  
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'crescent',
      duration: 50000
    });
    await loading.present()
    await this.service.getUserAddress(this.token)
      .subscribe(res => {
        console.log(res)
        this.address = res.content
        this.address = JSON.parse(JSON.stringify(this.address))
        loading.dismiss()
      }, err => {
        console.log(err)
        loading.dismiss()
      });
  }


  addAddress() {
    this.navCtrl.navigateForward('/add-address')
  }

  async setDefault(id ,quartier ,ville ,adress) {
    this.service.setDefaultAddress(id,this.token).subscribe(res => {
      console.log(res)
      this.storage.setItem('idDefault', id)
      this.storage.setItem('quartierDefault', quartier)
      this.storage.setItem('villeDefault', ville)
      this.storage.setItem('adressDefault', adress)
      this.getUserAddress()
    }, err => {
      console.log(err)
    })
  }

  goValidCommand() {
    let navExtra: NavigationExtras = {
      state: {
        orders : this.addressData
      }
    }
    this.route.navigate(['validation'],navExtra)
  }

}
