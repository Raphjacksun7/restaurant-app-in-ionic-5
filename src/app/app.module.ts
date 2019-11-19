import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Network } from '@ionic-native/network/ngx';
import { NavigationBar } from '@ionic-native/navigation-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

// Services/Providers
import { TranslateProvider, RestaurantService } from './providers';

// Modal Pages
import { SuggestRestoPageModule } from './pages/modal/suggest-resto/suggest-resto.module';
import { DishDetailPageModule } from './pages/modal/dish-detail/dish-detail.module';
import { CartPageModule } from './pages/modal/cart/cart.module';
import { MessagePageModule } from './pages/modal/message/message.module';
import { MapPageModule } from './pages/modal/map/map.module';
// import { LocationPageModule } from './pages/modal/location/location.module';
import { SearchFilterPageModule } from './pages/modal/search-filter/search-filter.module';

// Environment
import { environment } from '../environments/environment';

// Components

// Pipes
import { PipesModule } from './pipes/pipes.module';
import { IonicStorageModule } from '@ionic/storage';
import { AgmCoreModule } from '@agm/core';
// import { GoogleMaps } from '@ionic-native/google-maps/ngx';
// import { NativeStorage } from '@ionic/storage';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    // GoogleMaps,
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(environment.config),
    AppRoutingModule,
    HttpClientModule,
    SuggestRestoPageModule,
    DishDetailPageModule,
    CartPageModule,
    MessagePageModule,
    // MapPageModule,
    SearchFilterPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // NativeStorage,
    IonicStorageModule.forRoot(),
    // IonicStorageModule.forRoot({
    //   name: '__beninrestoo',
    //   driverOrder: ['indexeddb', 'sqlite', 'websql']
    // }),
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
    // }),
    PipesModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    Geolocation,
    Network,
    NavigationBar,
    LocationAccuracy,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HTTP,
    TranslateProvider,
    RestaurantService,
    NativeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
