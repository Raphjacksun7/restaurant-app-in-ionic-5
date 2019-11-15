import { Component, ViewChildren, QueryList } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController, LoadingController, NavController, Platform, IonRouterOutlet } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { Pages } from './interfaces/pages';
import { Network } from '@ionic-native/network/ngx';
import { NavigationBar } from '@ionic-native/navigation-bar/ngx';
import { AuthService } from './providers';
import { TranslateProvider } from './providers/translate/translate.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList < IonRouterOutlet > ;

  public appPages: Array<Pages>;
         username: string
         userAddress: string;
         mydata: boolean = false;
         lastTimeBackPress = 0;
         timePeriodToExit = 2000;
         
         
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private network: Network,
    private authService: AuthService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private translate: TranslateProvider,
    private translateService: TranslateService,
    public navCtrl: NavController,
    private router: Router,
    private navigationBar: NavigationBar
  ) {
    this.appPages = [
      {
        title: 'Mes adresses',
        url: '/myadress',
        direct: 'root',
        icon: 'ios-pin'
      },
      {
        title: 'Restaurants',
        url: '/restaurant-list/',
        direct: 'root',
        icon: 'restaurant'
      },
      {
        title: 'Offres speciales',
        url: '/special-offer',
        direct: 'forward',
        icon: 'gift'
      },
      {
        title: 'Commandes',
        url: '/latest-orders',
        direct: 'forward',
        icon: 'list-box'
      }
    ];

    this.initializeApp();
  }

  ionViewDidLoad() {
    this.authService.getToken().then(() => {
      this.mydata = false
      if(this.authService.isLoggedIn) {
        this.mydata = true
        this.username = this.authService.username
      }
    })
    this.authService.getDistric().then(() => {
      this.mydata = false
      if(this.authService.isLoggedIn) {
        this.mydata = true
        this.userAddress = this.authService.userAddress
      }
    })
  }
  ionViewWillEnter(){
    this.authService.getToken().then(() => {
      this.mydata = false
      if(this.authService.isLoggedIn) {
        this.mydata = true
        this.username = this.authService.username
      }
    })
    this.authService.getDistric().then(() => {
      this.mydata = false
      if(this.authService.isLoggedIn) {
        this.mydata = true
        this.userAddress = this.authService.userAddress
      }
    })
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      // header: 'Confirm!',
      message: "Etes vous sure de vouloir quitter l'application?",
      buttons: [{
        text: 'Annuler',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {}
      }, {
        text: "Fermer l'application",
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });
  
    await alert.present();
  }
  
  initializeApp() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.routerOutlets.forEach(async(outlet: IonRouterOutlet) => {
        if (this.router.url != 'restaurant-list/') {
          await this.router.navigate(['restaurant-list/']);
        } else if (this.router.url === 'restaurant-list/') {
          if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
            this.lastTimeBackPress = new Date().getTime();
            this.presentAlertConfirm();
          } else {
            navigator['app'].exitApp();
          }
        }
      });
    });
    this.platform.ready().then(() => {
      let autoHide: boolean = true;
      this.navigationBar.setUp(autoHide);
      // let status bar overlay webview
      this.statusBar.overlaysWebView(true);
      // set status bar to white
      this.statusBar.backgroundColorByHexString('#ffb900');
      setTimeout(() => {
        this.splashScreen.show();
        // Checking internet network 
      this.network.onDisconnect().subscribe(async () => {
        const alert = await this.alertCtrl.create({
          header: "La connexion a échoué",
          message: "Il peut y avoir un problème avec votre connexion Internet. Veuillez réessayer !",
          buttons: [
             {
              text: 'OKAY',
              handler: async () => {
                navigator['app'].exitApp()
              }
            }
          ]
        })   
        await alert.present() 
      })     
      this.network.onConnect().subscribe(() => { 
      })
      }, 1000);
      // this.splashScreen.hide();

      // Set language of the app.
      this.translateService.setDefaultLang(environment.language);
      this.translateService.use(environment.language);
      this.translateService.getTranslation(environment.language).subscribe(translations => {
        this.translate.setTranslations(translations);
      });
      
    }).catch(() => {
      // Set language of the app.
      this.translateService.setDefaultLang(environment.language);
      this.translateService.use(environment.language);
      this.translateService.getTranslation(environment.language).subscribe(translations => {
        this.translate.setTranslations(translations);
      });
    });
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.authService.logout()
    this.navCtrl.navigateRoot('home-location')
  }
}
