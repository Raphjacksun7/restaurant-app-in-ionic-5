import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { MapPage } from '../modal/map/map.page';
import { AddressService, AuthService } from '../../providers'


@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.page.html',
  styleUrls: ['./update-address.page.scss'],
})
export class UpdateAddressPage implements OnInit {

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

  idAddress: number;
  addresses: any = [];
  token: any;


  constructor(
    public route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public modalCtrl: ModalController,
    private service: AddressService,
    public toastController: ToastController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.idAddress = +this.route.snapshot.paramMap.get('id') 
    this.getAddress()
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


  getAddress (){
    this.authService.getToken().then(() => {
      if(this.authService.isLoggedIn) {
        this.token = this.authService.token

      }
    })
    this.service.getUserAddress(this.token)
      .subscribe(res => {
        this.addresses = res.content
        this.addresses = this.addresses.filter((resto) => resto.id === this.idAddress )
        this.addresses = JSON.parse(JSON.stringify(this.addresses))
        console.log(this.addresses)
        this.location = {
          latitude: this.addresses.gps_lat,
          longitude: this.addresses.gps_long
        };
      }, err => {
        console.log(err)
      });
  }

  SendAddress(){

    this.service.updateAddress(this.idAddress,this.distric,this.city,this.entreprise,this.location.latitude,this.location.longitude,this.adresse,this.institue,this.token )
      .subscribe( async data => {
        console.log(data.content)
          const toast = await this.toastController.create({
            message: 'Vous avez modifier cette adresse !',
            duration: 1500
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
