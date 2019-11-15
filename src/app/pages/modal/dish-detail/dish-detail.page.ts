import { Component, Input, OnInit } from '@angular/core'
import { NavController, ModalController, ToastController } from '@ionic/angular'
import { DomSanitizer } from '@angular/platform-browser'

import {
  RestaurantService,
  DishService,
  CartService,
  TranslateProvider
} from '../../../providers';

import { CartPage } from './../../modal/cart/cart.page'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.page.html',
  styleUrls: ['./dish-detail.page.scss'],
})
export class DishDetailPage implements OnInit {

  @Input() supplements: string 
  @Input()  dishId: string 
  @Input() idMenu: string
  
  commandes: Array<any> = []
  produits: Array<any> = []
  option: Array<any> = []
  panier: Array<any> = []
  public dishSupplements: any
  dish : any
  qtd = 1
  index = 0
  options : any [] = []
  supplementPrice : number = -1
  supplementsName: any [] = []



  constructor(
    private modalCtrl: ModalController,
    private sanitizer: DomSanitizer,
    public navCtrl: NavController,
    private restaurantService: RestaurantService,
    public toastCtrl: ToastController,
    private dishService: DishService,
    public route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.getDishSupplements ()
    this.getDish()
  }



   // minus adult when click minus button
   minusQtd() {
    this.qtd--;
  }
  // plus adult when click plus button
  plusQtd() {
    this.qtd++;
  }



  getDishSupplements (){
     this.dishSupplements = this.supplements

     for(const dish of this.dishSupplements){
      for(const option of dish.options){
        this.options.push({
          name : option.libelle,
          price : option.prix,
          isChecked : false
        })
      }
     }
     console.log(this.options)
     console.log(this.dishSupplements)
   
  }

  getDish() {
   
    this.restaurantService.getRestaurantsById(this.idMenu)  
       .subscribe(res => {
         for(const dish of res.content){
          for(const produit of dish.produits){
            if(produit.id === +this.dishId) {
              this.dish = dish.produits.filter((prod) => prod.id === +this.dishId )
              this.dish = JSON.parse(JSON.stringify(this.dish))
            }
          }
         }
         console.log(this.dish)
       }, err => {
         console.log(err)
       });
   }



   addcart() {
    let checkbox  = <any> document.getElementsByTagName('ion-checkbox');
    console.log(checkbox)
    let i , j ;
    for( i = 0; i < checkbox.length ; i++) {
      for(j = 0; j < this.options.length ; j++) {
        if( i === j ){
          this.options[i].isChecked = checkbox[j].checked
        }   
      } 
    }
    console.log(this.options)
    this.supplementPrice = 0
    this.options.map(obj => {
        if (obj.isChecked) {
          this.supplementPrice += +obj.price 
          this.supplementsName.push({
            name: obj.name,
            price: obj.price
          })
        }
    })
    console.log(this.supplementPrice)
    this.cartService.addtoCart(this.dish, this.qtd, this.supplementPrice, this.supplementsName ).then(async () => {
      const toast = await this.toastCtrl.create({
          message: 'Ce a plat été ajouté à votre panier !',
          duration: 1500,
          position: 'top',
          closeButtonText: 'OK',
          showCloseButton: true
      })
      toast.present();
    })

      for (const supplements of this.supplementsName ){  
        this.option.push({
            option_nom:supplements.name,
            option_prix:supplements.price,
        })
      } 
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
              option: this.option,
            }
        })
      }
    this.cartService.addCommandestoCart(this.commandes).then( data => {  
    })
    this.commandes = []
    this.options = []
    
  }


  async openCart() {
    const modal = await this.modalCtrl.create({
      component: CartPage
    });
    return await modal.present();
  }


  closeModal() {
    this.modalCtrl.dismiss();
  }

}




