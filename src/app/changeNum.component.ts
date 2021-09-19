import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'number',
  template: `<input type="number" (change)="changeToInt()" [(ngModel)]="num">`,
})
export class NumberComponent implements OnInit {
  @Input() num: number;
  @Output() newNumEvent = new EventEmitter<number>();
  // num: number;
  ngOnInit() {}

  changeToInt() {
    //Negative change to 1
    if (this.num < 0) {
      this.num = 1;
    }

    //Round number
    this.num = Math.round(this.num);
    this.setNewNum(this.num);
  }

  setNewNum(num: number) {
    this.newNumEvent.emit(num);
  }
}
