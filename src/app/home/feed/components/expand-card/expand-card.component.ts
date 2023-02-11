import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EXPAND_CARD } from 'src/constants/index';
@Component({
  selector: 'app-expand-card',
  templateUrl: './expand-card.component.html',
  styleUrls: ['./expand-card.component.scss'],
})
export class ExpandCardComponent {
  @Input() title: string;
  @Input() type: string;
  @Input() items?: Array<any>;
  @Input() text?: string;
  @Input() hasInput?: boolean;
  @Output() onExpand = new EventEmitter();
  public open = false;
  constructor() {}

  isExpandCardCurrentScreen() {
    return this.type === EXPAND_CARD.CURRENT_SCREEN;
  }
  toggle() {
    console.log('open');
    this.onExpand.emit();
    this.open = !this.open;
  }
}
