import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componentes09',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componentes09.component.html',
  styleUrl: './componentes09.component.css'
})
export class Componentes09Component {

  nome:string = '';
  cidade:string = '';

}
