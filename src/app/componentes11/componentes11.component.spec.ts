import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentes11Component } from './componentes11.component';

describe('Componentes11Component', () => {
  let component: Componentes11Component;
  let fixture: ComponentFixture<Componentes11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentes11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componentes11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
