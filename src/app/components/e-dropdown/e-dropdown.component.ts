import { Component } from '@angular/core';

@Component({
  selector: 'app-e-dropdown',
  templateUrl: './e-dropdown.component.html',
  styleUrls: ['./e-dropdown.component.scss'],
})
export class EDropdownComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  eventoClickItem(item: string): void {
    alert(item + ' clicked!');
  }
}
