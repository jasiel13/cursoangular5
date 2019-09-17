import {Component} from "@angular/core";

@Component({
    selector:'videojuegos',
    templateUrl:'./videojuegos.component.html'
    })
    export class VideojuegosComponent{
        public nombre :string;
        public mejor_juego : string ;
        public mejor_juego_retro: string ;
        public mostrar_retro:boolean;
        public color:string;
        public year:number;
        public videojuegos:Array<string>;

        constructor(){
            this.nombre ='Videojuegos 2018';
            this.mejor_juego ='GTA5';
            this.mejor_juego_retro = 'super mario 64';
            this.mostrar_retro=true;
            this.color="yellow";
            this.videojuegos=[
                'los simpson hit and run',
                'halo',
                'call of duty',
                'fifa',
                'resident evil'
            ];
        }        
    }