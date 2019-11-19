import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../providers';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private _storage: Storage,
    public navCtrl: NavController,
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        this._storage.get('token').then((res) => {
          console.log('??' + JSON.parse(res));
          if (JSON.parse(res).token) {
            resolve(true);
          }
        })
          .catch(() => {
            reject();
            this.navCtrl.navigateRoot('/login');
          });
      }
    );

  }

}
