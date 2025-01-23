import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}

    login(username: string,
          password: string): Observable<any> {
        return this.http.post(
            '/api/login',
            {
                nome: username,
                senha: password}
            )
            .pipe(tap(response => this.setSession(response)));
    }

    private setSession(authResult: any): void {
        console.log("Requisicao ==================");
        console.log(authResult);
        console.log("==================");
        localStorage
            .setItem('token', authResult.token);
    }
}
