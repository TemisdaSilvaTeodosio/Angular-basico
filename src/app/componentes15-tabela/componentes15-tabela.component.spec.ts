import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentes15TabelaComponent } from './componentes15-tabela.component';

describe('Componentes15TabelaComponent', () => {
  let component: Componentes15TabelaComponent;
  let fixture: ComponentFixture<Componentes15TabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentes15TabelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componentes15TabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
