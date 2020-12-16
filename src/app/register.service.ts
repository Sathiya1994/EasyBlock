import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { 
   
  }

public addUser(user :User):Observable<any>{
  //console.log(user);
  return this.http.post<any>("http://localhost:8080/addUser", user,{ responseType: 'text'as'json'});
}

}
