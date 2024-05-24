import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentes15Component } from './componentes15.component';

describe('Componentes15Component', () => {
  let component: Componentes15Component;
  let fixture: ComponentFixture<Componentes15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentes15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componentes15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
