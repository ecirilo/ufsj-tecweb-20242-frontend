import {NgModule} from '@angular/core';
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {Button, ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";
import {TableModule} from "primeng/table";
import {FileUploadModule} from "primeng/fileupload";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {RatingModule} from "primeng/rating";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {DialogModule} from "primeng/dialog";
import {SharedModule} from "../../shared/shared.module";
import {PerfilComponent} from "./perfil.component";
import {ChipModule} from "primeng/chip";
import {PerfilRoutingModule} from "./perfil-routing.module";

@NgModule({
    imports: [
        PerfilRoutingModule,
        CardModule,
        FormsModule,
        Button,
        CommonModule,
        TableModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        SharedModule,
        ChipModule
    ],
    declarations: [PerfilComponent]
})
export class PerfilModule { }
