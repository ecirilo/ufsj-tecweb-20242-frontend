import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
      private readonly router: Router,
      private readonly authService: AuthService) {
  }

  onLogin(): void {
    this.authService.login(this.username, this.password)
        .subscribe((): void => {
          console.log("Token ==================");
          console.log(localStorage.getItem('token'));
          console.log("==================");
          this.router.navigate(['']);
        });
  }
}