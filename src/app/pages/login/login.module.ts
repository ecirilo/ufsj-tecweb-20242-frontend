import {NgModule} from '@angular/core';
import {LoginComponent} from "./login.component";
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

@NgModule({
    imports: [
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
        SharedModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
