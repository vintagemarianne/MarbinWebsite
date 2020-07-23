import { Injectable } from '@angular/core';
import { CenteredModalEnum } from '@shr/models/enums/centered-modal-enum';

@Injectable({
  providedIn: 'root'
})
export class CenteredModalService {
private state: CenteredModalEnum = CenteredModalEnum.None;

  constructor() { }

  closeModal() {
    this.state = CenteredModalEnum.None;
  }

  showModal(state: CenteredModalEnum) {
    this.state = state;
  }

  getState(): CenteredModalEnum {
    return this.state;
  }
}
