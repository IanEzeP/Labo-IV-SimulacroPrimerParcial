import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit{

  //Agregar Input y Output
  arrayPaises : Array<any> = [];
  constructor(private paisService : PaisesService) {}

  ngOnInit(): void 
  {
    const consulta = this.paisService.TraerPaises();

    consulta.subscribe((respuesta) => {
      console.log(respuesta);

      this.arrayPaises = respuesta as Array<any>;
    })
  }
}
