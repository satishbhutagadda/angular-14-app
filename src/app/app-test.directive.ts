import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAppTest]'
})
export class AppTestDirective implements OnInit {
  @Input() testInput!: string;
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const elm = this.el.nativeElement as HTMLButtonElement;
    elm.textContent = 'Submit Pro';
    elm.style.color = 'yellow';

    console.log('directive input: ', this.testInput);
  }
}
