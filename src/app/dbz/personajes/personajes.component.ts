import { DbzService } from './../services/dbz.service';
import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})

export class PersonajesComponent {

  /*
  @Input('inputPersonajes') 
    personajes: Personaje[] = [] ;
  */
  get personajes() {
    return this.dbzService.personajes;
  }
  constructor ( private dbzService: DbzService ) {  }

}

/*
  El @input trae datos del componente padre en este caso Main component
*/