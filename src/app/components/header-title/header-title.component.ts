import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss'],
})
export class HeaderTitleComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
