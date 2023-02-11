import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ITEM_STANDARD_COLORS } from 'src/constants';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss'],
})
export class FilterComponentComponent implements OnInit {
  @Output() onCancel = new EventEmitter();
  @Output() onReset = new EventEmitter();
  public showColors = false;
  public colors: Array<[string, string]> = [];
  constructor() {}
  ngOnInit(): void {
    for (let element of ITEM_STANDARD_COLORS.entries()) {
      this.colors.push(element);
    }
  }
  onCancelEmit(): void {
    this.onCancel.emit();
  }
  onResetEmit(): void {
    this.onReset.emit();
  }
  onSubmit(): void {
    console.log('submitted');
  }
}
