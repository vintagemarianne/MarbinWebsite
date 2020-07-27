import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '@shr/services/http.service';
import { TokenService } from '@shr/services/token.service';
import { Sha256Service } from '@shr/services/sha256.service';

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
    private router: Router,
    private sha256Service: Sha256Service) { }

  ngOnInit(): void {
  }

  async login() {
    if (!this.loginInfo.email || !this.loginInfo.password) {
      alert('Email or password is invalid.');
      return;
    }

    let info = {
      email: this.loginInfo.email,
      password_digest: this.sha256Service.SHA256(this.loginInfo.password)
    }
    
    await this.httpService.login(info);
    
    this.router.navigate([LocalData.routes.home]);
  }
}
