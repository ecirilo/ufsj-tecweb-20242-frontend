import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {AuthServerProvider} from "../auth/auth-session.provider";


@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(
        private location: Location,
        private authServerProvider: AuthServerProvider
    ) {}

    login(): void {
        location.href = `${location.origin}${this.location.prepareExternalUrl(
            'oauth2/authorization/oidc'
        )}`;
    }

    logout(): void {
        this.authServerProvider.logout().subscribe((logout: any) : void => {
            window.location.href = `${logout.logoutUrl}`;
        });
    }
}
