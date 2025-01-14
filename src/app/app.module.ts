import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import {PalestraService} from "./service/palestra.service";
import {SharedModule} from "./shared/shared.module";
import {FullCalendarModule} from "@fullcalendar/angular";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        SharedModule,
        FullCalendarModule
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        PalestraService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
