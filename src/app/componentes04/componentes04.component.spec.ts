import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentes04Component } from './componentes04.component';

describe('Componentes04Component', () => {
  let component: Componentes04Component;
  let fixture: ComponentFixture<Componentes04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentes04Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componentes04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
