import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormatMediumDatePipe} from "./date/format-medium-date.pipe";
import {CommonModule} from "@angular/common";
import {TableModule} from "primeng/table";
import {FileUploadModule} from "primeng/fileupload";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
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
import {CalendarModule} from "primeng/calendar";
import {FullCalendarModule} from "@fullcalendar/angular";
import {ChipModule} from "primeng/chip";
import {QRCodeModule} from "angularx-qrcode";
import {LOAD_WASM, NgxScannerQrcodeModule} from "ngx-scanner-qrcode";

LOAD_WASM('assets/wasm/ngx-scanner-qrcode.wasm').subscribe();

@NgModule({
  imports: [
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
    CalendarModule,
    ReactiveFormsModule,
    FullCalendarModule,
    ChipModule,
    QRCodeModule,
    NgxScannerQrcodeModule
  ],
  declarations: [
    FormatMediumDatePipe
  ],
  exports: [
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
    CalendarModule,
    ReactiveFormsModule,
    FullCalendarModule,
    ChipModule,
    FormatMediumDatePipe,
    QRCodeModule,
    NgxScannerQrcodeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule {}
