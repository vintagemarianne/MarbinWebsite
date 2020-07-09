import { Injectable } from '@angular/core';

import { LocalDbUsageService } from '@shr/services/local-db-usage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private ticket: string;
  constructor(private localDbUsageService: LocalDbUsageService) { }

  async init() {
    this.ticket = await this.localDbUsageService.getUserToken();
  }
  async setUserTicket(ticket: string) {
    this.ticket = ticket;
    await this.localDbUsageService.setUserToken(this.ticket);
  }

  getUserTicket(): string {
    return this.ticket;
  }

  isLoggedIn(): boolean {
    if (this.ticket) return true;

    return false;
  }
}
