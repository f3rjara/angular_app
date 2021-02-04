import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add-personajes',
  templateUrl: './add-personajes.component.html'
})
export class AddPersonajesComponent  {

  @Input('nuevo') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  
  @Output() onNewPersonaje: EventEmitter<Personaje>  = new EventEmitter();


  agregar() {
    if ( this.nuevo.nombre.trim().length === 0 ) { return; } 
    this.onNewPersonaje.emit( this.nuevo )
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
