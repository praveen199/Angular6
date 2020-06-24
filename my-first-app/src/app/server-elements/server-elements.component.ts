import { Component, OnInit,Input, ViewEncapsulation,OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked,
   AfterViewInit, AfterViewChecked, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementsComponent implements OnInit,OnChanges {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header : ElementRef;
  @ContentChild('contentParagraph') paragraph : ElementRef;

  constructor() { 
    console.log('constructor called!')
  }

  ngOnChanges(changes : SimpleChanges) {
    console.log('ngOnChanges called!')
    console.log('Text Content'+ this.header.nativeElement.textContent)
    console.log('Text Content of paragraph' + this.paragraph.nativeElement.textContent)
  }

  ngOnInit(): void { 
    console.log('ngOnInit called!')
    console.log('')
  }

  ngDoCheck() {
    console.log('ngDocheck called!')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!')
    console.log('Text Content of paragraph!' + this.paragraph.nativeElement.textContent)
  }
  
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!')
    console.log('Text Content'+ this.header.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!')
  }
} 
