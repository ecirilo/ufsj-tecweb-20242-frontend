import {NgModule} from '@angular/core';
import {ComparecimentoComponent} from './comparecimento.component';
import {SharedModule} from "../../shared/shared.module";
import {ComparecimentoRoutingModule} from "./comparecimento-routing.module";

@NgModule({
    imports: [
      SharedModule,
      ComparecimentoRoutingModule
    ],
    declarations: [
      ComparecimentoComponent
    ]
})
export class ComparecimentoModule { }
