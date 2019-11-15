import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { throwError, Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class SuggestRestoService {


  constructor(
    private http: HttpClient
  ) {
    
  }

 
  sendSuggest(name,road,tel,comment) : Observable<any> {
   return this.http.post('https://beninrestoo.com/api/v1/suggest_resto?',
    {
      name:name,
      road:road,
      tel:tel,
      comment:comment,
      token:'eyJpZCI6IjkwMDE1ZWQ5MThiZWI0MzciLCJyIjo1MDU2LCJwc2V1ZG8iOiJhZG1pbiIsInBhc3N3b3JkIjoiYWRtaW4ifQ=='
    })
}

}