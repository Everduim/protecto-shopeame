import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  id!: number;
  producto!:any;

  constructor(private servicio: ApiService, private miraMiId: ActivatedRoute, private router: Router){}
  
  ngOnInit() : void{
    this.miraMiId.paramMap.subscribe((data:any) => {
      this.id=data.params.id
    });
    this.servicio.getProducto(this.id).subscribe((data:any)=>{
      this.producto=data;
 
    })
  }
  deleteProducto = () => {
    this.servicio.deleteProducto(this.id).subscribe((data:any)=>{
      alert("¡PRODUCTO ELIMINADO!")
      this.router.navigate(["/productos"])
    })
  }
}
