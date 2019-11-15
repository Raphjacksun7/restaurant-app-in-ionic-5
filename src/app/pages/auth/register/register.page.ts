import { Component, OnInit } from '@angular/core';
import { NgForm , FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { AuthService , AlertService } from '../../../providers';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;
  private firstname: string
  private lastname: string
  private email: string
  private password: string
  private tel: string
  token: any;
  userData: any;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  
 ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  
  ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      'fName': [null, Validators.compose([
        Validators.required
      ])],
      'lName': [null, Validators.compose([
        Validators.required
      ])],
      'tel': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }


  async register() {
    const loader = await this.loadingCtrl.create({
      message: "Veuillez-vous partinentez s'l vous plait",
      spinner: 'crescent',
      duration: 3000
    });
    loader.present();
    let fullName = this.firstname + '  ' + this.lastname
    this.authService.register(this.email, fullName , this.password , this.tel ).subscribe(
      data => {
        console.log(data)
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
              return
            },
            error => {
              this.alertService.presentToast("Il semblerait que vous ne vous êtes pas enregistré chez nous")
              console.log(error)
              return
          })
      },
      error => {
        console.log(error);
      }
    )
  }

  goToLogin() {
    this.navCtrl.navigateRoot('/login');
  }
}
