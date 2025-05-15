import { Component, ValueEqualityFn } from '@angular/core';
import { solicitudProductos } from '../../models/solicitudProductos';
import { Equipos } from '../../models/equipos';
import { FormBuilder,FormGroup, Validator, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet,RouterLink } from '@angular/router';



@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.css'
})
export class SolicitudComponent {
  form!: FormGroup;
  contador:number=0;
  boton:boolean=true;
  mensaje!:string;
  mostrarError=false;
  mostrarSuccess=false;
  mensajeFecha!:string;



  /**
   * Muestra un mensaje indicando que se requieren más de 3 solicitudes
   */
  mostraMensaje(){
    this.mensaje='Ingrese mas de 3 solicitudes';
  }

  /** Lista de productos disponibles */
  listSProducto:solicitudProductos[]=[];
  listProducto:Equipos[]=[
    {id:1, equipo:'tablet'},
    {id:2, equipo:'laptop'},
    {id:3, equipo:'teléfono'},
    {id:4, equipo:'Consola'},
  ];

  /**
   * Constructor que inicializa el formulario reactivo
   * @param fb FormBuilder para crear el formulario
   */
  constructor(private fb: FormBuilder) {
    
    this.form = this.fb.group({
      servicio:['', [Validators.required, Validators.minLength(5)]],
      cedula: ['', [Validators.required, Validators.minLength(10)]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaDevolucion: ['', Validators.required],
      equipo: ['', Validators.required],
      cantidad: ['', Validators.required],
    })
  }

  /**
   * Agrega una nueva solicitud a la lista si no existe ya una con el mismo número de servicio.
   * Realiza validaciones y muestra mensajes correspondientes.
   */
  agregarPersona(){
    if(this.existeSolicitud(this.form.value.servicio) ){
        this.mensaje="El numero de solicitud ya existe";
        this.error();

    }else{
  const Solicitud: solicitudProductos={   
    servicio:this.form.value.servicio,
    cedula:this.form.value.cedula,
    nombre:this.form.value.nombre,
    apellido:this.form.value.apellido,
    fechaInicio:this.form.value.fechaInicio,
    fechaDevolucion:this.form.value.fechaDevolucion,
    equipo:this.form.value.equipo,
    cantidad:this.form.value.cantidad,
    }
    this.listSProducto.push(Solicitud);
    this.form.reset();
    this.contador++;
    this.mensaje="La Solicitud se guardo con Exito";
    this.succes();
    this.validacionFecha();
  }
  this.botonH();
  }

    /**
   * Verifica si ya existe una solicitud con el número de servicio dado
   * @param servicio número de servicio
   * @returns true si existe, false si no
   */
  existeSolicitud(servicio:number):boolean{
    return this.listSProducto.some(solicitud => solicitud.servicio==servicio);
  }


    /**
   * Verifica si hay alguna solicitud en la que la fecha de inicio coincida con la fecha de devolución ingresada actualmente
   * @returns true si existe coincidencia, false si no
   */
  validacionFecha():boolean{
    return this.listSProducto.some(fecha => fecha.fechaInicio == this.form.value.fechaDevolucion);
  }

  /**
   * Muestra mensaje de error por 4 segundos
   */
  error(){
    this.mostrarError=true;

    setTimeout(()=>{
      this.mostrarError=false;
    },4000);
  }

   /**
   * Muestra mensaje de éxito por 3 segundos
   */
  succes(){
    this.mostrarSuccess=true;

    setTimeout(()=>{
      this.mostrarSuccess=false;
    },3000);
  }

   /**
   * Habilita o deshabilita el botón según el número de solicitudes
   */
  botonH(){
    if(this.contador>=1){
      this.boton=false;
    }else{
      this.boton=true;
    }
  }
  
  /**
   * Elimina una solicitud con el número de servicio indicado
   * @param servicio número de servicio de la solicitud a eliminar
   */
  eliminarSolicitud(servicio:number){
    let indice = this.listSProducto.findIndex(elemento => elemento.servicio === servicio);
    if (indice !== -1) {  
      this.listSProducto.splice(indice, 1);
    }
    this.contador--;
    this.botonH();
  }
 

}
