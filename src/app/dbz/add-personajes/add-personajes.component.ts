import { DbzService } from './../services/dbz.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add-personajes',
  templateUrl: './add-personajes.component.html'
})

export class AddPersonajesComponent  {

  @Input('inputNuevo') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  
  /*
  @Output() onNewPersonaje: EventEmitter<Personaje>  = new EventEmitter();
   
    El decorador @output es para emitir o enviar un valor del componente hijo al padre que en este caso es  mainPage.
    EventEmiter -> es un evento propio de Angular, de tipo generico
  */

  constructor ( private dbzService: DbzService) {}

  agregar() {
    if ( this.nuevo.nombre.trim().length === 0 ) { return; } 

    /*
    this.onNewPersonaje.emit( this.nuevo )
    El emit puede enviar un personaje o undefine, y en el componente padre lo recibimos 
    como un $event */

    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
