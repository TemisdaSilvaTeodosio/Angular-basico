import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentes07Component } from './componentes07.component';

describe('Componentes07Component', () => {
  let component: Componentes07Component;
  let fixture: ComponentFixture<Componentes07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentes07Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componentes07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
