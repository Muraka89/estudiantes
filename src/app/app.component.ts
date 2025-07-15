import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Datos } from './datos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'estudiantes';
  nombre:string='';
  promedio:number=0;

  estudiantes:Datos[]=[
    {nombre:'Ruben Eduardo Davila Flores', promedio: 7.8},
    {nombre:'Alejandro Martinez Garcia', promedio: 9.4},
    {nombre:'Sofia Reyes Lara', promedio: 8},
    {nombre:'Laura Ponce Torres', promedio: 8.2}
  ]

  agregarDatos():void{
    let aux:Datos={
      nombre: this.nombre,
      promedio: this.promedio
    }
    this.estudiantes.push(aux);
    this.nombre='';
    this.promedio=0;
  }

  eliminarEstudiante(nombre:string):void{
        let indice = this.estudiantes.findIndex( (p) => p.nombre === nombre);
        this.estudiantes.splice(indice,1) /*nada mas elimina ese*/
        alert('Estudiante '+ nombre + ' eliminado');

  }

}
