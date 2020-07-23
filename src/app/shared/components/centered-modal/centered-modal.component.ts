import { Component, OnInit } from '@angular/core';

import { CenteredModalService } from '@shr/services/centered-modal.service';

import { CenteredModalEnum } from '@shr/models/enums/centered-modal-enum';

@Component({
  selector: 'app-centered-modal',
  templateUrl: './centered-modal.component.html',
  styleUrls: ['./centered-modal.component.scss']
})
export class CenteredModalComponent implements OnInit {

  public CenteredModalEnum = CenteredModalEnum;

  constructor(public centeredModalService: CenteredModalService) { }

  ngOnInit(): void {
  }

}
