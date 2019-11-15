import { Component, OnInit } from '@angular/core';
import { NgForm  , FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AlertService, AuthService, TranslateProvider } from '../../../providers';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup
  private userData: any
  private email: string
  private password: string

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private translate: TranslateProvider,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onLoginForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    })
  }

  async login() {
    const loader = await this.loadingCtrl.create({
      message: "Veuillez-vous partinentez s'l vous plait",
      spinner: 'crescent',
      duration: 4000
    })
    loader.present()
    this.authService.usertoken(this.email, this.password)
    .subscribe(data => {
      console.log(data.content)
          this.authService.login(data.content.token).subscribe( data => {
            console.log(data)
            loader.onWillDismiss().then(() => {
              this.navCtrl.pop();
            })
            this.alertService.presentToast("Bienvenue "+data.username)    
          }, err => {
            this.alertService.presentToast("Il semblerait que vous ne vous êtes pas enregistré chez nous")
            console.log(err)
            return
          })
        console.log(data)
      },
      error => {
        this.alertService.presentToast("Il semblerait que vous ne vous êtes pas enregistré chez nous")
        console.log(error)
        return
      })
  }


  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: "Mot de passe oublié ?",
      message: this.translate.get('app.pages.login.text.forgot'),
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: this.translate.get('app.label.email')
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: this.translate.get('app.pages.login.text.sended'),
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  // // //
  goToRegister() {
    this.navCtrl.navigateRoot('/register');
  }

}
