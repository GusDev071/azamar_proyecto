import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const routes: Routes = [
  {path:'',component:PrincipalComponent},
  {path:'listas',component:ListarProductosComponent},
  {path:'crear-producto',component:CrearProductoComponent},
  {path:'editar-producto/:id',component:CrearProductoComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
