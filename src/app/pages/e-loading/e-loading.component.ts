import { Component } from '@angular/core';

@Component({
  selector: 'app-e-loading',
  templateUrl: './e-loading.component.html',
  styleUrls: ['./e-loading.component.scss'],
})
export class ELoadingDoc {
  loadingState: boolean = false;

  initLoader(): void {
    this.loadingState = true;
    setTimeout(() => {
      this.loadingState = false;
    }, 3000);
  }
}
