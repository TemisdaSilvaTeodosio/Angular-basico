import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componentes04',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componentes04.component.html',
  styleUrl: './componentes04.component.css'
})
export class Componentes04Component {

  //variável para exibir ou ocultar o quadrado
  exibir:boolean=false;

  //funça~i+o para exibir ou ocultar o quadrado
 acao(){ 
    if (this.exibir === true) {
    this.exibir = false;
  }else{
    this.exibir = true;
  }}
}
