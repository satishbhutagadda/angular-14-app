import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ICardContent } from 'src/app/shared/models/app.model';
import { CardDynamicContentComponent } from '../card-content/card-dynamic-content.component';
import { ContentHostDirective } from '../card-content/content-host.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild(ContentHostDirective, {static: true}) contentHost!: ContentHostDirective;
  // @ViewChild('appContentHost', {static: true, read: ViewContainerRef}) contentHost!: ViewContainerRef;

  timestamp$ = (): Observable<string> => {
    const timestamp = new Date().toLocaleTimeString();
    return new Observable(subscriber => {
      subscriber.next(timestamp);
    });
  }

  contentIndex: number = 0;

  cardContent: Array<ICardContent> = [
    {
      heading: 'Test heading 1',
      content: 'Test content 1'
    },
    {
      heading: 'Test heading 2',
      content: 'Test content 2'
    },
    {
      heading: 'Test heading 3',
      content: 'Test content 3'
    },
    {
      heading: 'Test heading 5',
      content: 'Test content 4'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    // const obs$ = of(null).pipe(map(() => Date.now()));
    this.initCardContent(this.contentIndex);
  }

  private initCardContent(index: number): void {
    const viewContainerRef = this.contentHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(CardDynamicContentComponent);
    componentRef.instance.content = this.cardContent[index].content;
  }

  previous(){
    console.log('previous clicked');
  }

  next(){
    console.log('next clicked');
    this.contentIndex = this.cardContent.length - 1 === this.contentIndex ? 0 : this.contentIndex + 1;
    this.initCardContent(this.contentIndex);
  }
}


