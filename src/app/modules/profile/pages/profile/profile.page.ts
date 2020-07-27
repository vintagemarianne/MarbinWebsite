import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '@shr/services/http.service';
import { TokenService } from '@shr/services/token.service';
import { Sha256Service } from '@shr/services/sha256.service';

import { User } from '@shr/models/user';
import { LocalData } from '@shr/local-data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  isEditing: boolean = false;
  isBusy: boolean = true;
  isChangePasswordModalOpen: boolean = false;
  isDeleteModalOpen: boolean = false;
  isModalBusy: boolean = false;

  newPassword: string = '';
  currentPassword: string = '';

  user: User;

  constructor(private httpService: HttpService,
    private tokenService: TokenService,
    private sha256Service: Sha256Service,
    private router: Router) { }

  async ngOnInit() {
    if(!this.tokenService.isLoggedIn()) {
      this.router.navigate([LocalData.routes.home]);
    }
    
    this.isBusy = true;
    this.user = await this.httpService.getUserInfo(this.tokenService.getUserTicket());
    this.isBusy = false;
  }

  async submit() {
    this.isBusy = true;

    let newUser = {
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      phone: this.user.phone,
      address: this.user.address,
      ticket_name: this.tokenService.getUserTicket()
    }

    await this.httpService.updateUserInfo(newUser);

    this.isBusy = false;
    this.isEditing = !this.isEditing;
  }

  async changePassword() {
    if (!this.newPassword || !this.currentPassword) {
      alert('Invalid information.');
      return;
    }

    if (this.currentPassword === this.newPassword) {
      alert('New password and current password are equal.');
      return;
    }

    this.isModalBusy = true;

    let input = {
      ticket_name: this.tokenService.getUserTicket(),
      password_digest: this.sha256Service.SHA256(this.currentPassword),
      new_password: this.sha256Service.SHA256(this.newPassword)
    };

    await this.httpService.changePassword(input);

    this.newPassword = '';
    this.currentPassword = '';
    this.isModalBusy = false;
    this.isChangePasswordModalOpen = false;
  }

  async deleteAccount() {
    if (!this.currentPassword) {
      alert('Invalid password.');
      return;
    }

    this.isModalBusy = true;

    let input = {
      ticket_name: this.tokenService.getUserTicket(),
      password_digest: this.sha256Service.SHA256(this.currentPassword)
    };

    await this.httpService.changePassword(input);

    this.currentPassword = '';
    this.isModalBusy = false;
    this.isDeleteModalOpen = false;
  }

}
