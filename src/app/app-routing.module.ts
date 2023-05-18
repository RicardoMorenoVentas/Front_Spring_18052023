import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMedicosComponent } from './lista-medicos/lista-medicos.component';
import { FormularioMedicoComponent } from './formulario-medico/formulario-medico.component';

const routes: Routes = [
  { path: '', component: ListaMedicosComponent },
  { path: 'formulario', component: FormularioMedicoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
