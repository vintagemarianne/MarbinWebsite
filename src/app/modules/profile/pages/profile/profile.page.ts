import { Component, OnInit } from '@angular/core';

import { HttpService } from '@shr/services/http.service';
import { TokenService } from '@shr/services/token.service';

import { User } from '@shr/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  isEditing: boolean = false;
  isBusy: boolean = true;
  isChangePasswordModalOpen: boolean = false;
  isModalBusy: boolean = false;

  newPassword: string = '';
  currentPassword: string = '';

  user: User;

  constructor(private httpService: HttpService,
    private tokenService: TokenService) { }

  async ngOnInit() {
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

  changePassword() {
    if (!this.newPassword || !this.currentPassword) {
      alert('Invalid information.');
      return;
    }

    if (this.currentPassword === this.newPassword) {
      alert('New password and current password are equal.');
      return;
    }

    this.isModalBusy = true;

    this.newPassword = '';
    this.currentPassword = '';
    this.isModalBusy = false;
    this.isChangePasswordModalOpen = false;
  }

}
