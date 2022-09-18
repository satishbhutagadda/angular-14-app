import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-dynamic-content',
  templateUrl: './card-dynamic-content.component.html',
  styleUrls: ['./card-dynamic-content.component.scss']
})
export class CardDynamicContentComponent implements OnInit {
  @Input() content!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
