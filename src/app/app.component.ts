import { Component, VERSION, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() num: number = 0;

  @Input() isPrimeOrFibo: string;

  setValue(newItem: string) {
    this.isPrimeOrFibo = newItem;
  }

  setNum(newNum: number) {
    this.num = newNum;
  }
}
