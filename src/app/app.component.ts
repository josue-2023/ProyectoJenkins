import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { SolicitudComponent } from "./components/solicitud/solicitud.component";
import { CabeceraComponent } from "./components/cabecera/cabecera.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CabeceraComponent]
})
export class AppComponent {
  title = 'Garcia-Cortez-hector-T1';
}
