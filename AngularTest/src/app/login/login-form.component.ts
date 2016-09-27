import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  template: `
    <h1>Login</h1>
    <div>
      <input type="text" [(ngModel)]="user" placeholder="User">
      <input type="password" [(ngModel)]="password" placeholder="Password">
      <button (click)="login()" class="btn btn-primary">Login</button>
    </div>
  `
})
export class LoginFormComponent {

  user = '';
  password = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private loginService: LoginService) { }

  login() {
    LoginService.BaseUrl = "Test";

    console.log(this.route.snapshot);
    if (this.loginService.login(this.user, this.password)) {
      
      const destination = this.route.snapshot.queryParams['destination'] || '/';
      console.log(destination);
      this.router.navigateByUrl(destination);
    }
  }

}
