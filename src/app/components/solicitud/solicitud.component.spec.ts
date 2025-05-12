import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule

import { SolicitudComponent } from './solicitud.component';

describe('SolicitudComponent', () => {
  let component: SolicitudComponent;
  let fixture: ComponentFixture<SolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudComponent,RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a solicitud', () => {
    // Configura el formulario con datos válidos
    component.form.setValue({
      servicio: 1,
      cedula: '0950109956',
      nombre: 'Juan',
      apellido: 'Pérez',
      fechaInicio: '2023-01-01',
      fechaDevolucion: '',
      equipo: 'tablet',
      cantidad: 1
    });
    component.agregarPersona(); // Llama a la función para agregar la solicitud
    expect(component.listSProducto.length).toBe(1); // Verifica que se haya agregado una solicitud
    expect(component.mensaje).toBe("La Solicitud se guardo con Exito"); // Verifica el mensaje de éxito
  });

   it('should not agregar si la solicitud ya existe', () => {
    // Agrega una solicitud inicial
    component.form.setValue({
      servicio: 1,
      cedula: '1234567890',
      nombre: 'Juan',
      apellido: 'Pérez',
      fechaInicio: '2023-01-01',
      fechaDevolucion: '2023-01-10',
      equipo: 'tablet',
      cantidad: 1
    });
    component.agregarPersona();
    // Intenta agregar la misma solicitud
    component.form.setValue({
      servicio: 1,
      cedula: '0987654321',
      nombre: 'Pedro',
      apellido: 'Gómez',
      fechaInicio: '2023-01-05',
      fechaDevolucion: '2023-01-15',
      equipo: 'laptop',
      cantidad: 1
    });
    component.agregarPersona();
    expect(component.listSProducto.length).toBe(1); // Verifica que no se haya agregado otra solicitud
    expect(component.mensaje).toBe("El numero de solicitud ya existe"); // Verifica el mensaje de error
  });

    it('should eliminar una solicitud', () => {
    // Agrega una solicitud inicial
    component.form.setValue({
      servicio: 1,
      cedula: '1234567890',
      nombre: 'Juan',
      apellido: 'Pérez',
      fechaInicio: '2023-01-01',
      fechaDevolucion: '2023-01-10',
      equipo: 'tablet',
      cantidad: 1
    });
    component.agregarPersona();
    // Elimina la solicitud
    component.eliminarSolicitud(1);
    expect(component.listSProducto.length).toBe(0); // Verifica que la lista esté vacía
  });

   it('should validate if a solicitud exists', () => {
    // Agrega una solicitud inicial
    component.form.setValue({
      servicio: 1,
      cedula: '1234567890',
      nombre: 'Juan',
      apellido: 'Pérez',
      fechaInicio: '2023-01-01',
      fechaDevolucion: '2023-01-10',
      equipo: 'tablet',
      cantidad: 1
    });
    component.agregarPersona();
    expect(component.existeSolicitud(1)).toBeTrue(); // Verifica que la solicitud exista
     });

});
