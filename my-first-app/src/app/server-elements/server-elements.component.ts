import { Component, OnInit,Input, ViewEncapsulation,OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked,
   AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementsComponent implements OnInit,OnChanges {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() { 
    console.log('constructor called!')
  }

  ngOnChanges(changes : SimpleChanges) {
    console.log('ngOnChanges called!')
    console.log(changes)
  }

  ngOnInit(): void { 
    console.log('ngOnInit called!')
  }

  ngDoCheck() {
    console.log('ngDocheck called!')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!')
  }
  
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!')
  }
} 
