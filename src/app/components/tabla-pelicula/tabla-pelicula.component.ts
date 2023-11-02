import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit{

@Input() listaPeliculas : Array<Pelicula> = [];                          //El listado de peliculas que me va a llegar desde busqueda-component.
@Output() peliculaSeleccionadaEvent = new EventEmitter<Pelicula>();      //El evento para enviar la pelicula seleccionada

/**
 * Al presionar una pelicula del listado se asignara esa pelicula al evento, para que la recupere el componente padre.
 * @param obj La pelicula seleccionada.
 */
seleccionarPelicula(obj : Pelicula)
{
  this.peliculaSeleccionadaEvent.emit(obj);
  console.log("Pelicula seleccionada");
}

ngOnInit(): void {}
}
