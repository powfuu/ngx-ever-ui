import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  stateSideSheet: boolean = true;

  handleSideSheet(): void {
    this.stateSideSheet = !this.stateSideSheet;
  }
}
