import {catchError, Observable, of, ReplaySubject, shareReplay, tap} from "rxjs";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {TUser} from "../model/user.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    private userIdentity: TUser | null = null;
    private authenticationState: ReplaySubject<TUser | null> = new ReplaySubject<TUser | null>(1);
    private accountCache$?: Observable<TUser> | null;

    constructor(
        private http: HttpClient,
        private router: Router,
    ) {}

    identity(force?: boolean): Observable<TUser | null> {
        if (!this.accountCache$ || force) {
            this.accountCache$ = this.fetchUsuarioAutenticado().pipe(
                tap((account: TUser): void => {
                    this.authenticate(account);
                }),
                shareReplay()
            );
        }
        return this.accountCache$.pipe(catchError((): Observable<null> => of(null)));
    }

    isAuthenticated(): boolean {
        return this.userIdentity !== null;
    }

    private fetchUsuarioAutenticado(): Observable<TUser> {
        return this.http.get<TUser>('/api/usuarios/logados');
    }

    private authenticate(identity: TUser | null): void {
      this.userIdentity = identity;
      this.authenticationState.next(this.userIdentity);
      if (!identity) {
        this.accountCache$ = null;
      }
    }
}
