import { Component, OnInit } from '@angular/core';

import { HttpService } from '@shr/services/http.service';
import { Sha256Service } from '@shr/services/sha256.service';

import { User } from '@shr/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {

  user: User;

  constructor(private httpService: HttpService,
    private sha256Service: Sha256Service) { }

  ngOnInit(): void {
    this.user = new User();
  }

  async signup() {
    if (!this.user.first_name ||
      !this.user.last_name ||
      !this.user.email ||
      !this.user.password_digest ||
      !this.user.address ||
      !this.user.phone) {
      alert('The Fields are note filled correctly.');
      return;
    }

    let newUser = {
      email: this.user.email,
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      password_digest: this.sha256Service.SHA256(this.user.password_digest),
      address: this.user.address,
      phone: this.user.phone
    }
    
    let user: User = await this.httpService.signup(newUser);
  }

}
