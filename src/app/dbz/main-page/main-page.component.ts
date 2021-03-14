import { DbzService } from './../services/dbz.service';
import { Personaje } from './../interfaces/dbz.interface';
import { Component } from '@angular/core';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo:Personaje = {
    nombre: 'Mestro Rochi',
    poder: 1500
  }


  constructor() {}

  /* 
  Opcion 1 para traer los datos del servicio
    get personajes():Personaje[] {
      return this.dbzServide.personajes;
    }
  
  
  agregarNuevoPersonaje( personaje: Personaje ) {
    this.personajes.push( personaje )
  }

  */


}
