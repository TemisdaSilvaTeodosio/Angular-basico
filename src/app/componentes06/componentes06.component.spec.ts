import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentes06Component } from './componentes06.component';

describe('Componentes06Component', () => {
  let component: Componentes06Component;
  let fixture: ComponentFixture<Componentes06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentes06Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componentes06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
