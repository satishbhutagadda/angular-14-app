import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TestDataService } from './test-data.service';


export interface UserInfo {
  firstName: string;
  lastName: string;
  fullName?: string;
  userID?: number
}

export interface UserInfoForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
}

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.scss']
})
export class TestParentComponent implements OnInit {
  dataSource!: Array<UserInfo>;
  constructor(private testDataService: TestDataService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.testDataService.getUserInfo().subscribe(users => this.dataSource = users);
  }

}
