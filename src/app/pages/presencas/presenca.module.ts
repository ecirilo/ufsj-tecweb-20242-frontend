import {NgModule} from '@angular/core';
import {PresencaComponent} from './presenca.component';
import {SharedModule} from "../../shared/shared.module";
import {PresencaRoutingModule} from "./presenca-routing.module";

@NgModule({
    imports: [
      SharedModule,
      PresencaRoutingModule
    ],
    declarations: [
      PresencaComponent
    ]
})
export class PresencaModule { }
