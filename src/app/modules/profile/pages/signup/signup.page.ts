import { Component, OnInit } from '@angular/core';

import { HttpService } from '@shr/services/http.service';

import { User } from '@shr/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {

  user: User;

  constructor(private httpService: HttpService) { }

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

    let user: User = await this.httpService.signup(this.user);
    debugger;
  }

}
