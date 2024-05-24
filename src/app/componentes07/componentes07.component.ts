import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componentes07',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componentes07.component.html',
  styleUrl: './componentes07.component.css'
})
export class Componentes07Component {
  
  //variável lógica
  condicao:boolean = false;

  //lista de aprovados e reprovados
  lista:string[] = ['aprovado', 'aprovado', 'reprovado'];
  
}

