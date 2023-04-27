import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './producto/producto/producto.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "acerca", component:AcercaComponent},
  {path: "contacto", component:ContactoComponent},
  {path: "gestion", component:GestionComponent},
  {path: "productos", component:ProductosComponent},
  {path: "productos/:id", component:ProductoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
