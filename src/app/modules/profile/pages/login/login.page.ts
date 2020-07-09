import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '@shr/services/http.service';
import { TokenService } from '@shr/services/token.service';

import { UserTicket } from '@shr/models/user-ticket';
import { LocalData } from '@shr/local-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  loginInfo = {
    email: '',
    password: ''
  };

  constructor(private httpService: HttpService,
    private tokenService: TokenService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async login() {
    if (!this.loginInfo.email || !this.loginInfo.password) {
      alert('Email or password is invalid.');
      return;
    }

    let userTicket: UserTicket = await this.httpService.login(this.loginInfo);
    debugger;
    await this.tokenService.setUserTicket(userTicket.ticket_name);
    this.router.navigate([LocalData.routes.home]);
  }

}
