import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentes14Component } from './componentes14.component';

describe('Componentes14Component', () => {
  let component: Componentes14Component;
  let fixture: ComponentFixture<Componentes14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentes14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componentes14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
