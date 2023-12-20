import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http : HttpClient ) { }

  url : string = 'http://localhost:4000/productos'

  getProductos() : Observable<Producto[]>
  {
    return this.http.get<Producto[]>(this.url); 
  }

  getProducto(id : number) : Observable<Producto>
  {
    return this.http.get<Producto>(`${this.url}/${id}`); 
  }

  postProducto( producto : Producto) : Observable<Producto>
  {
    return this.http.post<Producto>(this.url, producto, {headers : {'Content-type' : 'application/json'}}); 
  }

  putProducto( producto : Producto) : Observable<Producto>
  {
    return this.http.put<Producto>(`${this.url}/${producto.id}`, producto, {headers : {'Content-type' : 'application/json'}}); 
  }

  deleteProducto(id : number) : Observable<Producto>
  {
    return this.http.delete<Producto>(`${this.url}/${id}`); 
  }




}
