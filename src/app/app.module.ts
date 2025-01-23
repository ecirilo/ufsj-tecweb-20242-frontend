import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { PalestraService } from "./service/palestra.service";
import { SharedModule } from "./shared/shared.module";
import { FullCalendarModule } from "@fullcalendar/angular";
import { LoginModule } from "./pages/login/login.module";
import {AuthService} from "./service/auth.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./auth/token.interceptor";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule,
        AppLayoutModule,
        FullCalendarModule,
        LoginModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        PalestraService,
        AuthService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
