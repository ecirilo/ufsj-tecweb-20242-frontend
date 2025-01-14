import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PalestraRoutingModule} from './palestra-routing.module';
import {PalestraComponent} from './palestra.component';
import {SharedModule} from "../../shared/shared.module";
import { PalestraUpdateDialogComponent } from './components/palestra-update-dialog/palestra-update.dialog.component';
import {TableModule} from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import {RatingModule} from "primeng/rating";
import { ToastModule } from 'primeng/toast';
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DropdownModule} from "primeng/dropdown";
import { RadioButtonModule } from 'primeng/radiobutton';
import {InputNumberModule} from "primeng/inputnumber";
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { RippleModule } from 'primeng/ripple';
import {PalestraDeleteDialogComponent} from "./components/palestra-delete-dialog/palestra-delete.dialog.component";

@NgModule({
    imports: [
        CommonModule,
        PalestraRoutingModule,
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
        CalendarModule
    ],
    declarations: [PalestraComponent, PalestraUpdateDialogComponent, PalestraDeleteDialogComponent]
})
export class PalestraModule { }
