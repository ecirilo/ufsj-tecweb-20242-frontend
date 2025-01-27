import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {UsuarioService} from "../service/usuario.service";
import {AuthService} from "../service/auth.service";
import {map} from "rxjs/operators";
import {catchError, Observable, of} from "rxjs";
import {TUser} from "../model/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private readonly router: Router,
        private readonly loginService: AuthService,
        private readonly userService: UsuarioService
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        return this.userService.identity().pipe(
            map((usuario: TUser | null): boolean => {
                if (usuario) {
                    return true;
                }

                this.loginService.login();
                return false;
            }),
            catchError((): Observable<boolean> => {
                this.loginService.login();
                return of(false);
            })
        );
    }
}
