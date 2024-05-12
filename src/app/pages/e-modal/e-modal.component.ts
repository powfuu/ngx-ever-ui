import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-e-modal',
  templateUrl: './e-modal.component.html',
  styleUrls: ['./e-modal.component.scss'],
})
export class EModalDoc {
  stateModal = new BehaviorSubject<boolean>(false);

  openModal(): void {
    this.stateModal.next(true);
  }
}
