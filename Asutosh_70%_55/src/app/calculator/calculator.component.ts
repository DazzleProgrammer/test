import { OnInit } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit{

  input: string = '';

  constructor() {}

  ngOnInit(): void {}

  addInput(value: string) {
  
    this.input = this.input + value;
  }

  clearInput() {
    this.input = '';
  }

  Operation(operation: string) {
    
    this.input=this.input+operation;
  }

  calculate() {
    try {
      const result = Function('"use strict";return (' + this.input + ')')();
     this.input = result.toString();
    } catch (error) {
      this.input = 'Error';
    }
  }

}
