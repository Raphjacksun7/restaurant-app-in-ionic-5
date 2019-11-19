
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map, catchError } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { throwError, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { NavController, MenuController, LoadingController } from '@ionic/angular';




@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoggedIn = false;
  token: any;
  userData: any;
  userAddress: any;
  username: any;
  tel: any;
  email: any;
  userPass: any;
  gps_lat = 0;
  gps_lng = 0;


  constructor(
    private http: HttpClient,
    private storage: Storage,
    private router: Router,
    public navCtrl: NavController,

  ) { }


  usertoken(email: String, password: String): Observable<any> {
    return this.http.post('https://beninrestoo.com/api/v1/token',
      { pseudo: email, password: password }
    ).pipe(
      map((token: any) => {
        console.log(token);
        this.storage.set('token', JSON.stringify(token.content));
        this.storage.get('token')
        .then(
          (e) => {
            console.log('token dans service:' + JSON.parse(e));
          },
          error => console.error('Error storing item', error)
        );
        this.isLoggedIn = true;
        return token;
      }),
    );
  }

  login(token: string): Observable<any> {
    return this.http.post('https://beninrestoo.com/api/v1/login?',
      { token: token }).pipe(
        map((userData: any) => {
          this.userData = JSON.stringify(userData);
          console.log(this.userData);
          this.storage.set('userData', 'this.userData')
          // .then(
          //   () => {
          //     // this.router.navigate(['/restaurant-list/']);
              this.navCtrl.navigateRoot('/restaurant-list/');
          //     console.log('Token Stored');
          //   },
          //   error => console.error('Error storing item', error)
          // );
          this.isLoggedIn = true;
          return userData;
        }),
      );
  }
  register(email: String, username: String, password: String, tel: String) {
    return this.http.post('https://beninrestoo.com/api/v1/subscribe_user?',
      // tslint:disable-next-line: max-line-length
      { email: email, username: username, password: password, tel: tel, token: 'eyJpZCI6IjkwMDE1ZWQ5MThiZWI0MzciLCJyIjo1MDU2LCJwc2V1ZG8iOiJhZG1pbiIsInBhc3N3b3JkIjoiYWRtaW4ifQ==' }
    );
  }

  logout() {
    this.storage.remove('token');
    this.storage.remove('userData');
    this.storage.remove('idDefault');
    this.storage.remove('quartierDefault');
    this.storage.remove('villeDefault');
    this.storage.remove('adressDefault');
    this.storage.remove('gps_lat');
    this.storage.remove('gps_long');
    this.isLoggedIn = false;
    delete this.token;
    delete this.userPass;
    delete this.username;
    delete this.email;
    delete this.tel;
  }

  getToken() {
    return this.storage.get('token').then(
      data => {
        data = JSON.parse(data);
        console.log(data);
        this.token = data.token;
        this.username = data.username;
        this.email = data.email;
        this.tel = data.tel;

        if (this.token != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
      error => {
        this.token = null;
        this.username = null;
        this.email = null;
        this.tel = null;
        this.isLoggedIn = false;
      }
    );
  }

  getDistric() {
    return this.storage.get('adressDefault').then(
      data => {
        this.userAddress = data;
        if (this.userAddress != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
      error => {
        this.userAddress = null;
        this.isLoggedIn = false;
      }
    );
  }

  getGpsLat() {
    return this.storage.get('gps_lat').then(
      data => {
        this.gps_lat = data;
        if (this.gps_lat != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
      error => {
        this.gps_lat = null;
        this.isLoggedIn = false;
      }
    );
  }

  getGpsLng() {
    return this.storage.get('gps_lng').then(
      data => {
        this.gps_lng = data;
        if (this.gps_lat != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
      error => {
        this.gps_lng = null;
        this.isLoggedIn = false;
      }
    );
  }

  getUserPass() {
    return this.storage.get('userData').then(
      data => {
        this.userPass = data.password;
        console.log(this.userData);
        if (this.userPass != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
      error => {
        this.userPass = null;
        this.isLoggedIn = false;
      }
    );
  }
}
