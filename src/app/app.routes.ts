import { Routes } from '@angular/router';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';

export const routes: Routes = [
    {path:'',redirectTo:'formulario', pathMatch: 'full'},
    {path:'formulario', component:SolicitudComponent},
    {path: 'enviar/:cantidad',component:MostrarComponent},
    //{path:'enviar/:cantidad',component:MostrarComponent},
    
];
