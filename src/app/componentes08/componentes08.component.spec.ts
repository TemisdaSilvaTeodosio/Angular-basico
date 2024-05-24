import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentes08Component } from './componentes08.component';

describe('Componentes08Component', () => {
  let component: Componentes08Component;
  let fixture: ComponentFixture<Componentes08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentes08Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componentes08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
