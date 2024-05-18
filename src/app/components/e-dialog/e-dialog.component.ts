import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-e-dialog',
  templateUrl: './e-dialog.component.html',
  styleUrls: ['./e-dialog.component.scss'],
})
export class EDialogComponent {
  dialogState = new BehaviorSubject<boolean>(false);
  mostrarDialog(): void {
    this.dialogState.next(true);
  }

  eventoClickConfirm(): void {
    alert('Dialog clicked!');
  }
}
