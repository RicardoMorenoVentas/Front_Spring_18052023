import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Medico } from 'src/_models/Medico';

const baseUrl = 'http://localhost:8080';
let executed = false;

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  private _medicos: Medico[] = [];

  private _medicoSelec!: Medico;

  constructor(private httpCliente : HttpClient) { }

  public get medicos(): Medico[] {
    return this._medicos;
  }
  public set medicos(value: Medico[]) {
    this._medicos = value;
  }
  public get medicoSelec(): Medico {
    return this._medicoSelec;
  }
  public set medicoSelec(value: Medico) {
    this._medicoSelec = value;
  }

  obtenerTodos(){
    if (!executed){
      this.httpCliente.get(baseUrl+'/getAll').subscribe(data =>
        this._medicos.push(<any>data)
      );
      executed = true;
    }
  }

  mandarUno(med:Medico){
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    this.httpCliente.post(baseUrl+"/getAll",{ method: "POST", headers, body: JSON.stringify(med) })
      .pipe(catchError(err => {
        console.log(err);
        return err;
    }));
  }

  obtenerUno(id:number){
    this.httpCliente.get(baseUrl+"/"+id).subscribe(data => this._medicoSelec = <any>data);
  }

  eliminarUno(id:number){
    this.httpCliente.delete(baseUrl+"/del/"+id);
  }


}
