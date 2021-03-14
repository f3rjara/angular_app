import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Veguetta',
            poder: 7500
        },
        {
            nombre: 'Gohan',
            poder: 17500
        }
    ]

    get personajes():Personaje[] {
        return [...this._personajes];
    }

    constructor () { }

    //Metodo para agregar personaje
    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push(personaje);
    }
}