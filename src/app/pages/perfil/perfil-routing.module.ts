import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PerfilComponent} from "./perfil.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: PerfilComponent }
    ])],
    exports: [RouterModule]
})
export class PerfilRoutingModule { }
