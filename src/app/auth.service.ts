import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser!: string;

  constructor() { }
  login(email: string, password: string): void {
    // Perform login logic and set the logged-in user
    this.loggedInUser = email;
  }

  // logout(): void {
  //   // Perform logout logic and clear the logged-in user
  //   this.loggedInUser = null;
  // }

  getCurrentUser(): string {
    return this.loggedInUser;
  }

  isLoggedIn(): boolean {
    return !!this.loggedInUser;
  }
}
