export class Medico {
  public idMedico: number;
  public dni: string;
  public nombre: string;
  public edad: number;

  constructor(idMedico?:number, dni?:string, nombre?:string, edad?:number){
    this.idMedico = idMedico!;
    this.dni = dni!;
    this.nombre = nombre!;
    this.edad = edad!;
  }
}
