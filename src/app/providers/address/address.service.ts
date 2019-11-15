import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { throwError, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  idAddressDefault: number;

  constructor(
    private http: HttpClient,
    private storage: NativeStorage
  ) {
    
  }

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
 
  addAddress(quartier,ville,entreprise,gps_lat,gps_long,adress ,instruction,token ) : any {
    return this.http.post('https://beninrestoo.com/api/v1/client/add_adress?' ,
      {
        id: -1,
        quartier: quartier,
        ville: ville, 
        entreprise: entreprise,
        gps_lat: gps_lat,
        gps_long: gps_long,
        adress: adress,
        instruction: instruction,
        token:token
      }
      
    )}

    updateAddress(id,quartier,ville,entreprise,gps_lat,gps_long,adress ,instruction,token ) : any {
      return this.http.post('https://beninrestoo.com/api/v1/client/add_adress?' ,
        {
          id: id,
          quartier: quartier,
          ville: ville, 
          entreprise: entreprise,
          gps_lat: gps_lat,
          gps_long: gps_long,
          adress: adress,
          instruction: instruction,
          token:token
          
        }
      )}

      getUserAddress(token): Observable<any> {
        return this.http.get('https://beninrestoo.com/api/v1/client/adress?token='+token).pipe(
          map(this.extractData),
          catchError(this.handleError));
      }
    
      setDefaultAddress(id,token ) : any {
        return this.http.post(`https://beninrestoo.com/api/v1/client/adr/${id}/default?` ,{
          token:token
        } ).pipe(
          map(this.extractData),
          catchError(this.handleError));
        }

}
