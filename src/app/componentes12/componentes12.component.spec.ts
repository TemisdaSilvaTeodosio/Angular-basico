import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentes12Component } from './componentes12.component';

describe('Componentes12Component', () => {
  let component: Componentes12Component;
  let fixture: ComponentFixture<Componentes12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentes12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componentes12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
