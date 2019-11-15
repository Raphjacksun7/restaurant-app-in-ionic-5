import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable ,of, from , throwError  } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';;
import { catchError, tap, map } from 'rxjs/operators';


const PromoApiUrl = 'https://beninrestoo.com/api/v1/promotions?token='
const token='eyJpZCI6IjkwMDE1ZWQ5MThiZWI0MzciLCJyIjo1MDU2LCJwc2V1ZG8iOiJhZG1pbiIsInBhc3N3b3JkIjoiYWRtaW4ifQ=='

@Injectable({
  providedIn: 'root'
})

export class SpecialOfferService {

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


  getSpecialOffers(): Observable<any> {
    return this.http.get(PromoApiUrl+token).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  
  
  getSpecialOffersById(id: string) {
    
  }

  
}
