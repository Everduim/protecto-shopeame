import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = "http://localhost:3000/productos"

  constructor(private http: HttpClient) { }
  public productoInfo = {
    id:"",
    name:"",
    price:"",
    description:"",
    stars:"",
    image:"",
  }
  getProductos = () => {
    return this.http.get(this.baseUrl);
  };
  getProducto =(id:number)=>{
    return this.http.get(`${this.baseUrl}/${id}`);
  };
  postProducto = (producto: any) => {
    return this.http.post(this.baseUrl, producto)
  };
  deleteProducto = (id:number)=> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  };
  editItem = (producto: any) => {
    this.productoInfo = producto;
  }
  cleanProducto = () => {
    this.productoInfo = {
    id:"",
    name:"",
    price:"",
    description:"",
    stars:"",
    image:"",
    };
  };
  putProducto = (productoId: any, editedProducto: any ) => {
    return this.http.put(`${this.baseUrl}/${productoId}`, editedProducto)
  }
}
