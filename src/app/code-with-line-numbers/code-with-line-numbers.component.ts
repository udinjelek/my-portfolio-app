// src/app/code-with-line-numbers/code-with-line-numbers.component.ts
import { Component, Input, OnInit } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-code-with-line-numbers',
  templateUrl: './code-with-line-numbers.component.html',
  styleUrls: ['./code-with-line-numbers.component.scss']
})
export class CodeWithLineNumbersComponent implements OnInit {

  @Input() code: string = '';
  lineNumbers: string = '';
  highlightedCode: string = '';

  ngOnInit(): void {
    this.highlightedCode = hljs.highlightAuto(this.code).value;
    this.lineNumbers = this.generateLineNumbers(this.code);
  }

  generateLineNumbers(code: string): string {
    const lines = code.split('\n');
    return lines.map((_, index) => index + 1).join('\n');
  }
}
