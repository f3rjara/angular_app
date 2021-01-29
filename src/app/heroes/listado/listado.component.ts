import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroes:string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor'
  ]
  public heroesBorrados:string[] = [];
  public showHeroes:boolean = true;
  public showHeroesBorrados:boolean = false;

  borrarHeroe( ):void {
    this.showHeroesBorrados = true
    this.heroesBorrados.push ( this.heroes.shift() );
    if( this.heroes.length == 0) {
      this.showHeroes = false
    }
  }

}
