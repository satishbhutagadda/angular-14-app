import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterContentInit {
  @Input() title!: string;
  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter();

  @ContentChild(TemplateRef) contentP!: TemplateRef<any>;
  @ContentChild('testContent') testContent!: ElementRef;
  constructor() { }
  
  ngOnInit(): void {
    console.log('onInit dynamic component!')
  }
  
  ngAfterContentInit(): void {
    console.log('afterViewInit dynamic component!', this.contentP);
    console.log('afterViewInit dynamic elementRef!', this.testContent.nativeElement);
  }
}
