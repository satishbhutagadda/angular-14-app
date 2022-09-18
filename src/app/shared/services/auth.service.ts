import { Injectable, OnInit } from '@angular/core';
import { UserType } from '../models/app.model';

export const USER_TYPE = 'user-type';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  get userRole(): string | null {
    return sessionStorage.getItem(USER_TYPE);
  }

  constructor() { }
  
  ngOnInit(): void {
    const role: UserType = 'Basic';
    sessionStorage.setItem(USER_TYPE, role);
  }

}
