import {NgModule} from '@angular/core';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutModule} from './layout/app.layout.module';
import {PalestraService} from "./service/palestra.service";
import {SharedModule} from "./shared/shared.module";
import {UsuarioService} from "./service/usuario.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./auth/token.interceptor";

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      AppLayoutModule,
      AppRoutingModule,
      SharedModule,
    ],
    providers: [
      { provide: LocationStrategy, useClass: PathLocationStrategy },
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
      PalestraService,
      UsuarioService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
