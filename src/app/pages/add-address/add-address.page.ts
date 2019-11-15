import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm  , FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { MapPage } from '../modal/map/map.page';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AddressService, AuthService } from '../../providers'


@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {

  public onAddAddressForm: FormGroup

  location: {
    latitude: number,
    longitude: number
  }
  
  private distric: any
  private city: string
  private adresse: string
  private entreprise: string
  private institue: string
  token: any;
  userData: any;



  constructor(
    public route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public modalCtrl: ModalController,
    private address: AddressService,
    public toastController: ToastController,
    private auth: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit() {
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
    })
    
  }

  ionViewWillEnter() {
    this.auth.getToken().then(() => {
      if(this.auth.isLoggedIn) {
        this.token = this.auth.token
        this.userData = this.auth.userData
      }
    })
  }

  SendAddress(){

    this.address.addAddress(this.distric,this.city,this.entreprise,this.location.latitude,this.location.longitude,this.adresse,this.institue,this.token )
      .subscribe( async data => {
        console.log(data.content)
          const toast = await this.toastController.create({
            message: 'Vous avez ajouter un nouvel adresse !',
            duration: 2000
          })
          toast.present()

          }, err => {
            console.log(err)
          })
      }

   goToMap() {
    this.modalCtrl.create({component: MapPage,componentProps: {location: this.location }})
    .then(modal => {  
       modal.onDidDismiss().then( modalData => {
         if(!modalData.data) return
         console.log(modalData.data)
         this.location = {
          latitude: modalData.data.lat,
          longitude: modalData.data.lng
        }
      })
        modal.present();
    })
  }


}
