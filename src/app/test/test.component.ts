import { Component,Input, Output, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`<h2>{{"Hello "+name}}</h2>
  
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

 @Input('parentData') public name: any;
 @Output() public childEvent:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {

  }
 

}
