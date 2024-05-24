import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentes15FormularioComponent } from './componentes15-formulario.component';

describe('Componentes15FormularioComponent', () => {
  let component: Componentes15FormularioComponent;
  let fixture: ComponentFixture<Componentes15FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentes15FormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componentes15FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
