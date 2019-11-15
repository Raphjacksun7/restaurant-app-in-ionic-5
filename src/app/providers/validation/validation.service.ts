import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ValidationService {

  constructor(private http: HttpClient) { }


  validCommand(commande,token ) : any {
    return this.http.post('https://beninrestoo.com/api/v1/add_commande?',
      {
        commande: commande,
        token: token
        
      }
      
    )}

  
}
