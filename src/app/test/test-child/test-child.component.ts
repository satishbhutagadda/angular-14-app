import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from '../test-parent/test-parent.component';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'fullName'];
  @Input() dataSource: UserInfo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
