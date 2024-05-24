import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
    selector: 'app-componentes12',
    standalone: true,
    templateUrl: './componentes12.component.html',
    styleUrl: './componentes12.component.css',
    imports: [CommonModule, MediaPipe]
})
export class Componentes12Component {

  //texto
  nome:string = 'Temis';

  //objeto
  obj:any = {'nome': 'Temis', 'idade' : 20};

  // Vetor de objetos
 alunos:any = [
  {'nome':'Ana',     'nota1':8, 'nota2':9},
  {'nome':'Julio',   'nota1':7, 'nota2':8},
  {'nome':'Letícia', 'nota1':3, 'nota2':2},
  {'nome':'Ricardo', 'nota1':7, 'nota2':7}
];

}
