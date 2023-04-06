import { ChangeDetectorRef, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRemoveTabSpace]'
})
export class RemoveTabSpaceDirective {
  @Input() val!: any;

  constructor(private elRef: ElementRef, private cdRef: ChangeDetectorRef) { }

  @HostListener('paste') removeSpace() {
    const val = this.val.replaceAll('\t', " ");
    this.elRef.nativeElement.value = val;
    this.cdRef.detectChanges();
    console.log('Hi!!!!!!!', this.elRef.nativeElement.value);
  }
}
