import { Component, ViewChild } from '@angular/core';
import { EtoastComponent } from 'ngx-ever-components';

@Component({
  selector: 'app-e-toast',
  templateUrl: './e-toast.component.html',
  styleUrls: ['./e-toast.component.scss'],
})
export class EToastDoc {
  @ViewChild('toastSuccess') toastSuccess!: EtoastComponent;
  @ViewChild('toastAlert') toastAlert!: EtoastComponent;
  @ViewChild('toastWarning') toastWarning!: EtoastComponent;
  @ViewChild('toastError') toastError!: EtoastComponent;

  mostrarToastSuccess(): void {
    this.toastSuccess.showToast();
  }

  mostrarToastAlert(): void {
    this.toastAlert.showToast();
  }

  mostrarToastWarning(): void {
    this.toastWarning.showToast();
  }

  mostrarToastError(): void {
    this.toastError.showToast();
  }
}
