import { BehaviorSubject } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-e-sidesheet',
  templateUrl: './e-sidesheet.component.html',
  styleUrls: ['./e-sidesheet.component.scss'],
})
export class ESidesheetComponent {
  state = new BehaviorSubject<boolean>(false);

  mostrarSidesheet(): void {
    this.state.next(true);
  }
}
