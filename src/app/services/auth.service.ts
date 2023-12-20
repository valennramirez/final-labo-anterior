import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:4000/usuarios"; 

  
  user: User = {
    username : '', 
    password : '', 
    id : 0
  }; 

  getUsuarios(): Observable <User[]>
  {
    return this.http.get<User[]>(this.url); 
  }
  
  verificarUsername(username : string)
  {
    this.getUsuarios().subscribe({
      next : (us) => {

        this.user!=us.find((u : User) => {u.username == username});
        console.log(this.user); 
      }, 
      error : (err) => {
        console.log(err); 
      }
    })
  }

  get CurrentUser()
  {
    return this.user; 
  }
   
}
