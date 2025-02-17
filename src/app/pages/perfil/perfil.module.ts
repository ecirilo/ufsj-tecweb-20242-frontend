import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {PerfilComponent} from "./perfil.component";
import {PerfilRoutingModule} from "./perfil-routing.module";

@NgModule({
    imports: [
      SharedModule,
      PerfilRoutingModule
    ],
    declarations: [PerfilComponent]
})
export class PerfilModule { }
