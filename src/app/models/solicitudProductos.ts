export class solicitudProductos{
    servicio!:number;
    cedula:string;
    nombre:string;
    apellido:string
    equipo:string;
    fechaInicio:Date;
    fechaDevolucion:Date;
    cantidad:number;

    constructor(servicio:number,cedula:string,nombre:string,apellido:string,equipo:string, fechaInicio:Date,fechaDevolucion:Date, cantidad:number){
        this.servicio=servicio;
        this.cedula=cedula;
        this.nombre=nombre;
        this.apellido=apellido;
        this.equipo=equipo;
        this.fechaInicio=fechaInicio;
        this.fechaDevolucion=fechaDevolucion;
        this.cantidad=cantidad;

    }

}