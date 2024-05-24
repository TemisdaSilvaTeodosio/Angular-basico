import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentes13Component } from './componentes13.component';

describe('Componentes13Component', () => {
  let component: Componentes13Component;
  let fixture: ComponentFixture<Componentes13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentes13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componentes13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
