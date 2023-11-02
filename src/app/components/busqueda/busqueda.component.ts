import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit
{
//Solo atributos y manejadores de eventos

  ngOnInit(): void {}

  peliculasBD : Array<Pelicula> = [];         //Lista de peliculas que vamos a enviar a tabla-pelicula
  peliculaObj : Pelicula = new Pelicula();    //Vamos a enviar a detalle - pelicula
  peliculaObtenida : boolean = false;         //Variable para cambiar la vista de detalle-pelicula
 //new Date(1697589356000).toLocaleString();
  constructor(private firestore : AngularFirestore) 
  { 
    this.traerPeliculas();
  }

  traerPeliculas()
  {
    const col = this.firestore.collection('peliculas');
    col.valueChanges().subscribe((next : any) => {
      console.log(next);
      //this.peliculasBD = next;
      this.cargarPeliculas(next);
    })
  }

  cargarPeliculas(array : Array<any>)
  {
    this.peliculasBD = [];
    array.forEach(obj => {
      let pelicula : Pelicula = new Pelicula();
      pelicula.id = obj.id;
      pelicula.nombre = obj.nombre;
      pelicula.tipo = obj.tipo;
      pelicula.actor = obj.actor;
      pelicula.fechaEstreno = new Date(obj.fechaDeEstreno);
      pelicula.cantidadPublico = obj.cantidadDePublico;
      pelicula.foto = obj.foto;
      this.peliculasBD.push(pelicula);
    });
  }

  enviarPeliculaDetalle(pelicula : Pelicula) //Lo que vamos a recibir de tabla-pelicula
  {
    this.peliculaObj = pelicula;
    this.peliculaObtenida = true;
  }
}
