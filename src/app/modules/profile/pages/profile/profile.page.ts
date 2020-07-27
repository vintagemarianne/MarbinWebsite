import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.isBusy = true;

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
