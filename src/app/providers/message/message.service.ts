import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { throwError, Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class MessageService {


  constructor(
    private http: HttpClient
  ) {
    
  }

 
  sendMessage(objet,messages,email) : Observable<any> {
    return this.http.post('https://beninrestoo.com/api/v1/client/sendMail?' ,
      {objet: objet, contenu: messages, resto: email,token:'eyJpZCI6IjkwMDE1ZWQ5MThiZWI0MzciLCJyIjo1MDU2LCJwc2V1ZG8iOiJhZG1pbiIsInBhc3N3b3JkIjoiYWRtaW4ifQ=='}
    )}

  
}
