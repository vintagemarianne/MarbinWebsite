import { Component, OnInit } from '@angular/core';

import { TokenService } from '@shr/services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private tokenServic: TokenService) { }

  ngOnInit() {
    this.tokenServic.init();
  }
}
