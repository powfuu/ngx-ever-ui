import { Component, Input } from '@angular/core';

@Component({
  selector: 'pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent {
  @Input() next: string | null = null;
  @Input() previous: string | null = null;
  @Input() notfix?: boolean | null = false;
}
