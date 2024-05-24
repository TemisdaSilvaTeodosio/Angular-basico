import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentes09Component } from './componentes09.component';

describe('Componentes09Component', () => {
  let component: Componentes09Component;
  let fixture: ComponentFixture<Componentes09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentes09Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componentes09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
