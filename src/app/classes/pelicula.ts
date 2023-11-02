export class Pelicula 
{
    id : string = '';
    nombre : string = '';
    tipo : string = '';                 //Género de la pelicula { terror , comedia, amor ,otros }
    fechaEstreno : Date = new Date();
    cantidadPublico : number = 0;
    foto : string = '';
    actor : string = ''; // Cambiar por objeto Actor

    //fechaEstreno : Timestamp = new Timestamp();
    //id : number = 0;
    /*
    constructor(id : number, nombre : string, tipo : string, fechaEstreno : Date, cantidadPublico : number, foto : string)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.foto = foto;
    }*/
    constructor()
    {
    }
}
