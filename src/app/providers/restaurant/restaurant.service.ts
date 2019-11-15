import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable ,of, from , throwError  } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';;
import { catchError, tap, map } from 'rxjs/operators';


import restaurants from './mock-restaurants';

const RestoApiUrl = 'https://beninrestoo.com/api/v1/restos?token='
const token='eyJpZCI6IjkwMDE1ZWQ5MThiZWI0MzciLCJyIjo1MDU2LCJwc2V1ZG8iOiJhZG1pbiIsInBhc3N3b3JkIjoiYWRtaW4ifQ=='
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};  
@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  data = [];

  constructor(private http: HttpClient , private nativeHttp: HTTP) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }


  getRestaurants(): Observable<any> {
    return this.http.get(RestoApiUrl+token).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  
  
  getRestaurantsById(id: string): Observable<any> {
    return this.http.get('https://beninrestoo.com/api/v1/resto/'+id+'/menus?&token='+token).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  favoriteCounter = 0;
  favorites: Array<any> = [];
  restaurants: Array<any> = restaurants;

  findAll() {
    return Promise.resolve(restaurants);
  }

  // getRestaurants() {
  //   return this.restaurants;
  // }

  // findById(id) {
  //   return Promise.resolve(restaurants[id - 1]);
  // }

  getItem(id) {
    for (let i = 0; i < this.restaurants.length; i++) {
      if (this.restaurants[i].id === parseInt(id)) {
        return this.restaurants[i];
      }
    }
    return null;
  }

  findByName(searchKey: string) {
    const key: string = searchKey.toUpperCase();
    return Promise.resolve(restaurants.filter((restaurant: any) =>
    (restaurant.title +  ' ' + restaurant.address +  ' ' + restaurant.city + ' ' +
    restaurant.description).toUpperCase().indexOf(key) > -1));
  }

  getFavorites() {
    return Promise.resolve(this.favorites);
  }

  favorite(restaurant) {
    this.favoriteCounter = this.favoriteCounter + 1;
    this.favorites.push({id: this.favoriteCounter, restaurant: restaurant});
    return Promise.resolve();
  }

  unfavorite(favorite) {
    const index = this.favorites.indexOf(favorite);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    return Promise.resolve();
  }
}
