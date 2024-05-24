import { Component } from '@angular/core';

@Component({
  selector: 'app-componentes08',
  standalone: true,
  imports: [],
  templateUrl: './componentes08.component.html',
  styleUrl: './componentes08.component.css'
})
export class Componentes08Component {

  //variável de média
  media:number = 3;

  //vetor de nomes
  nomes:string[] = ['Dom', 'Ana', 'Cassandra', 'Alexandra'];

  //Linguagem
  linguagem:string = 'JS'
}
