import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dropdown',
  template: `<select [(ngModel)]="selectedOption" (change)="selectOption()">
  <option *ngFor="let option of options" [value]="option">{{option}}</option>
  </select>
  <input type="hidden" id="isPrimeOrFibo">`,
})
export class DropdownComponent implements OnInit {
  @Input() num: number;
  @Input() options: string[] = ['isPrime', 'isFibonacci'];
  @Input() selectedOption: string;

  @Output() newValueEvent = new EventEmitter<string>();
  @Input() isPrimeOrFibo: string;
  primeArr = new Array();
  fibonacciArr = new Array(1, 1);

  ngOnInit() {}

  setValue(value: string) {
    this.newValueEvent.emit(value);
  }

  selectOption() {
    if (this.selectedOption == 'isPrime') {
      this.isPrime(this.num);
    } else if (this.selectedOption == 'isFibonacci') {
      this.isFibonacci(this.num);
    }
    this.setValue(this.isPrimeOrFibo);
  }

  isPrime(num: number) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        this.primeArr.push(i);
      }
    }
    if (this.primeArr.length == 0 && this.num > 1) {
      this.isPrimeOrFibo = 'true';
    } else this.isPrimeOrFibo = 'false';
  }

  isFibonacci(num: number) {
    for (let i = 0; i < this.fibonacciArr.length; i++) {
      let nextFibonacci = this.fibonacciArr[i] + this.fibonacciArr[i + 1];
      this.fibonacciArr.push(nextFibonacci);
      if (num == this.fibonacciArr[i + 1]) {
        return (this.isPrimeOrFibo = 'true');
      } else if (num < this.fibonacciArr[i]) {
        return (this.isPrimeOrFibo = 'false');
      }
    }
  }
}
