import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserInfo } from './test-parent.component';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {
  // userData: UserInfo[] = [
  //   {userID: 1, firstName: 'test', lastName: 'user1'},
  //   {userID: 2, firstName: 'test', lastName: 'user2'}
  // ];
  constructor(private httpClient: HttpClient) {}

  getUserInfo(): Observable<Array<any>>{
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<Array<any>>(`api/users`, {headers: header});
  }
}
