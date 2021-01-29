import { Component } from "@angular/core";
@Component( {
    selector: 'app-contador',
    template: `
        <h1> {{ titulo }}</h1>
        <button (click)="acumular(-base)"> - {{ base }} </button>
        <span>{{ numero }}</span>
        <button (click)="acumular(+base)"> + {{ base }} </button>
        <hr>
        <span>La base es = <strong> {{ base }}</strong></span>
    `
})
export class ContadorComponent {
    public titulo:string = 'Acumulador APP';
    public numero:number = 0;
    public base:number   = 5;

    acumular( valor:number )  { 
        this.numero += valor  
    }
}