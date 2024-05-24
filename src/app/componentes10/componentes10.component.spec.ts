import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentes10Component } from './componentes10.component';

describe('Componentes10Component', () => {
  let component: Componentes10Component;
  let fixture: ComponentFixture<Componentes10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentes10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componentes10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
