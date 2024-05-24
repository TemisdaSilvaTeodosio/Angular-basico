import { Component } from '@angular/core';
import { Componentes15FormularioComponent } from "../componentes15-formulario/componentes15-formulario.component";
import { Componentes15TabelaComponent } from "../componentes15-tabela/componentes15-tabela.component";

@Component({
    selector: 'app-componentes15',
    standalone: true,
    templateUrl: './componentes15.component.html',
    styleUrl: './componentes15.component.css',
    imports: [Componentes15FormularioComponent, Componentes15TabelaComponent]
})
export class Componentes15Component {

}
