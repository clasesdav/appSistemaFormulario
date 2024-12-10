import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { FormularioTemplateComponent } from './pages/formulario-template/formulario-template.component';

const routes: Routes = [
  {path:'inicio',component: InicioComponent},
  {path:'acercade',component: AcercadeComponent},
  {path:'formulariotemplate',component: FormularioTemplateComponent},



  {path:'**',component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
