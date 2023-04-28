import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {
  productoForm!: FormGroup;
  constructor(private servicio: ApiService,
  private formBuilder : FormBuilder){}
public nuevoProducto = this.servicio.productoInfo;
public productoId = this.servicio.productoInfo.id;
ngOnInit() :void{
  this.productoForm = this.formBuilder.group({
    name: [
      this.nuevoProducto.name, [Validators.required, Validators.minLength(5)]
    ],
    id: [
      this.nuevoProducto.id, [Validators.required, Validators.minLength(1)]
    ],
    price: [
      this.nuevoProducto.price, [Validators.required, Validators.minLength(2)]
    ],
    description: [
      this.nuevoProducto.description, [Validators.required, Validators.minLength(10)]
    ],
    stars: [
      this.nuevoProducto.stars, [Validators.required, Validators.maxLength(5)]
    ],
    image: [
      this.nuevoProducto.image, [Validators.required]
    ]
  });
  this.productoForm.valueChanges.subscribe((changes)=>{
    this.nuevoProducto = changes;
  });
}
onSubmit = () => {
  this.servicio.cleanProducto();
  if (this.productoId !== ""){
    this.servicio.putProducto(this.productoId, this.nuevoProducto).subscribe()
  } else {
    this.servicio.postProducto(this.nuevoProducto).subscribe();
  }
  this.productoForm.reset()
  
}

}
