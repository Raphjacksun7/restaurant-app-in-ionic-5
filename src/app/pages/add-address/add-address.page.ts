import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoadingController, ModalController, ToastController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AddressService, AuthService } from '../../providers';
import { MatDialog } from '@angular/material/dialog';
import { MapPage } from './map.page';
import { Geoposition, Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {

  public onAddAddressForm: FormGroup;

  userStations: Geoposition;
  location: {
    latitude: number,
    longitude: number
  };

  distric: any;
  city: string;
  adresse: string;
  entreprise: string;
  institue: string;
  token: any;
  userData: any;



  constructor(
    public route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public modalCtrl: ModalController,
    private address: AddressService,
    public toastController: ToastController,
    private auth: AuthService,
    private http: HttpClient,
    public dialog: MatDialog,
    public navCtrl: NavController,
    private _storage: Storage,
    private geolocation: Geolocation,
  ) { }

  ngOnInit() {
    this.getUserPositionInStorage();
    this.onAddAddressForm = this.formBuilder.group({

      'distric': [null, Validators.compose([
        Validators.required
      ])],
      'city': [null, Validators.compose([
        Validators.required
      ])],
      'address': [null, Validators.compose([
        Validators.required
      ])],
      'entreprise': [null, Validators.compose([

      ])],
      'institue': [null, Validators.compose([

      ])]
    });

  }

  async getUserPositionInStorage() {
    await this.geolocation.getCurrentPosition().then(async (position) => {
      this.userStations = position;
  });
}

  ionViewWillEnter() {
    this.auth.getToken().then(() => {
      if (this.auth.isLoggedIn) {
        this.token = this.auth.token;
        this.userData = this.auth.userData;
      }
    });
  }

  SendAddress() {
    this.address.addAddress(this.distric, this.city, this.entreprise, this.userStations.coords.latitude, this.userStations.coords.longitude, this.adresse, this.institue, this.token)
      .subscribe(async data => {
        console.log(data.content);
        const toast = await this.toastController.create({
          message: 'Vous avez ajouter un nouvel adresse !',
          duration: 2000
        });
        toast.present();

      }, err => {
        console.log(err);
      });
  }

  async goToMap() {

    this.navCtrl.navigateRoot('add-address/add').then((a) => {
      console.log('a:' + a);
    })
      .catch((e) => {
        console.log('e:' + e);
      });

    // const editOrAddDialog = this.dialog.open(MapPage, {width: '500px', height: '500px'});
    // editOrAddDialog.afterClosed().subscribe((result) => { });


    // await this.modalCtrl.create({ component: MapPage, componentProps: { location: this.location } })
    //   .then(modal => {
    //     console.log(modal);
    //     modal.onDidDismiss().then(modalData => {
    //       if (!modalData.data) return
    //       console.log(modalData.data);
    //       this.location = {
    //         latitude: modalData.data.lat,
    //         longitude: modalData.data.lng
    //       };
    //     });
    //     modal.present();
    //   });
  }


}
