import { Component, OnInit } from '@angular/core';
import { MedicosService } from 'src/_services/medicos.service';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrls: ['./lista-medicos.component.css']
})
export class ListaMedicosComponent implements OnInit{

  constructor(private _servicio: MedicosService){}

  ngOnInit(): void {
    this._servicio.obtenerTodos();
  }


  public get servicio(): MedicosService {
    return this._servicio;
  }
  public set servicio(value: MedicosService) {
    this._servicio = value;
  }

}
