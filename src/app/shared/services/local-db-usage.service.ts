import { Injectable } from '@angular/core';

import { LocalDbService } from '@shr/services/local-db.service';

@Injectable({
  providedIn: 'root'
})
export class LocalDbUsageService {

  constructor(private localDbService: LocalDbService) { }

  async setUserToken(token: string) {
    await this.localDbService.set('user_token', token);
  }

  async getUserToken() {
    return await this.localDbService.get<string>('user_token');
  }

  async removeUserToken() {
    await this.localDbService.remove('user_token');
  }
}
