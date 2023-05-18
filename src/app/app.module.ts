import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosService } from 'src/_services/medicos.service';
import { ListaMedicosComponent } from './lista-medicos/lista-medicos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioMedicoComponent } from './formulario-medico/formulario-medico.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaMedicosComponent,
    FormularioMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [MedicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
