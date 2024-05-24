import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente05',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente05.component.html',
  styleUrl: './componente05.component.css'
})
export class Componente05Component {

  //vetor de nomes
  nomes:string[] =['Bruna', 'Daniela', 'Bela', 'Timothy' ];
}
