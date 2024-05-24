import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componentes10',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './componentes10.component.html',
  styleUrl: './componentes10.component.css'
})
export class Componentes10Component {

  formulario = new FormGroup({
    nome: new FormControl(''),
    cidade: new FormControl('')
  })
}
