import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenService } from '@shr/services/token.service';
import { LocalDbUsageService } from '@shr/services/local-db-usage.service';

import { LocalData } from '@shr/local-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private localDbUsageServic: LocalDbUsageService,
    public tokenService: TokenService) { }

  ngOnInit(): void {
  }

  signup() {
    this.router.navigate([LocalData.routes.signup]);
  }

  login() {
    this.router.navigate([LocalData.routes.login]);
  }

  goHome() {
    this.router.navigate([LocalData.routes.home]);
  }

  logout() {
    this.localDbUsageServic.removeUserToken();
    this.tokenService.setUserTicket(null);
    this.goHome();
  }
}
