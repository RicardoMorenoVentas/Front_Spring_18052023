import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/_models/Medico';
import { MedicosService } from 'src/_services/medicos.service';

@Component({
  selector: 'app-formulario-medico',
  templateUrl: './formulario-medico.component.html',
  styleUrls: ['./formulario-medico.component.css']
})
export class FormularioMedicoComponent implements OnInit {
  private _medico!: Medico;

  constructor(private _servicio: MedicosService) { }

  ngOnInit(): void {
    this._medico = new Medico();
  }

  public get servicio(): MedicosService {
    return this._servicio;
  }
  public set servicio(value: MedicosService) {
    this._servicio = value;
  }
  public get medico(): Medico {
    return this._medico;
  }
  public set medico(value: Medico) {
    this._medico = value;
  }

  addMedico(){
    this._servicio.mandarUno(this._medico);
  }
}
