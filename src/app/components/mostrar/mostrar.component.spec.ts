import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule

import { MostrarComponent } from './mostrar.component';

describe('MostrarComponent', () => {
  let component: MostrarComponent;
  let fixture: ComponentFixture<MostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarComponent,RouterTestingModule ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
