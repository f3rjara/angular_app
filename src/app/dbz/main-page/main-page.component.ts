import { Personaje } from './../interfaces/dbz.interface';
import { Component } from '@angular/core';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Veguetta',
      poder: 7500
    },
    {
      nombre: 'Cell',
      poder: 6000
    }
  ]

  nuevo:Personaje = {
    nombre: 'Rochi',
    poder: 1500
  }
  
  agregarNuevoPersonaje( personaje: Personaje ) {
    this.personajes.push( personaje )
  }
}
