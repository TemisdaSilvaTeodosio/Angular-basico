import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componentes06',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componentes06.component.html',
  styleUrl: './componentes06.component.css'
})
export class Componentes06Component {

  //variável contendo uma linguagem (HTML, CSS, JS)
  linguagem:string = 'CSS';
}
