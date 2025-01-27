import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";
import {AuthService} from "../service/auth.service";
import {UsuarioService} from "../service/usuario.service";

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements
    HttpInterceptor {
    constructor(
        private loginService: AuthService,
        private usuarioService: UsuarioService,
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap({
                error: (err: HttpErrorResponse): void => {
                    if (
                        err.status === 401 &&
                        err.url &&
                        !err.url.includes('/api/usuarios/logados') &&
                        this.usuarioService.isAuthenticated()
                    ) {
                        this.loginService.login();
                    }
                },
            })
        );
    }
}
