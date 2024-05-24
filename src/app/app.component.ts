import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01Component } from "./componente01/componente01.component";
import { Componente02Component } from "./componente02/componente02.component";
import { Componente03Component } from "./componente03/componente03.component";
import { Componentes04Component } from "./componentes04/componentes04.component";
import { Componente05Component } from "./componente05/componente05.component";
import { Componentes06Component } from "./componentes06/componentes06.component";
import { Componentes07Component } from "./componentes07/componentes07.component";
import { Componentes08Component } from "./componentes08/componentes08.component";
import { Componentes09Component } from "./componentes09/componentes09.component";
import { Componentes10Component } from "./componentes10/componentes10.component";
import { Componentes11Component } from "./componentes11/componentes11.component";
import { Componentes12Component } from "./componentes12/componentes12.component";
import { Componentes13Component } from "./componentes13/componentes13.component";
import { Componentes14Component } from "./componentes14/componentes14.component";
import { Componentes15Component } from "./componentes15/componentes15.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Componente01Component, Componente02Component, Componente03Component, Componentes04Component, Componente05Component, Componentes06Component, Componentes07Component, Componentes08Component, Componentes09Component, Componentes10Component, Componentes11Component, Componentes12Component, Componentes13Component, Componentes14Component, Componentes15Component]
})
export class AppComponent {
  title = 'angular-basico';
}
