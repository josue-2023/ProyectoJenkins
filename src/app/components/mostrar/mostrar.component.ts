import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { solicitudProductos } from '../../models/solicitudProductos';


@Component({
  selector: 'app-mostrar',
  standalone: true,
  imports: [],
  templateUrl: './mostrar.component.html',
  styleUrl: './mostrar.component.css'
})
export class MostrarComponent {

  contador!:number | null;
  cantidad:string | null ;
  listProductos:solicitudProductos[]=[];
  constructor(private aRoute:ActivatedRoute){
    this.cantidad = this.aRoute.snapshot.paramMap.get('cantidad');
    
  }

  ngOnInit(){
    this.cantidadSolicitudes();
  }

  cantidadSolicitudes(){

  
    }
  


  
}
