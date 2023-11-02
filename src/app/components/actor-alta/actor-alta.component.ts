import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Actor } from 'src/app/classes/actor';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent {

  //guardar de pais Nombre (pais.name.common)  y Bandera (pais.flag.png)

  actor : Actor = new Actor();
  constructor(private firestore : AngularFirestore)
  {

  }

  alta()
  {
    const col = this.firestore.collection('actores');

    const documento = this.firestore.doc('actores/' + this.firestore.createId());
    this.actor.id = documento.ref.id;

    documento.set({
      id: this.actor.id,
      nombre: this.actor.nombre,
      apellido: this.actor.apellido,
      pais: this.actor.pais,
      edad: this.actor.edad,
    });
  }
}
