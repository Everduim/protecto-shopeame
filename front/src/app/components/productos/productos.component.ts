import { Component } from '@angular/core';
import { InterfaceProducto } from 'src/app/interface/interface-producto';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  listaProductos: InterfaceProducto[]=[]
  constructor(private productoService: ApiService){}

  ngOnInit(): void{
    this.productoService.getProductos().subscribe((data:any) =>{
    //  console.log(data) 
    this.listaProductos = [...data]
  })
}
}
