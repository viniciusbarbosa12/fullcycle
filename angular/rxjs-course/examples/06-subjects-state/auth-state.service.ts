import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export type User = {
  id: number;
  name: string;
  roles: string[];
};

@Injectable({ providedIn: 'root' })
export class AuthStateService {
  private readonly userSubject = new BehaviorSubject<User | null>(null);

  readonly user$ = this.userSubject.asObservable();
  readonly isLoggedIn$ = this.user$.pipe(map(user => user !== null));
  readonly isAdmin$ = this.user$.pipe(map(user => user?.roles.includes('admin') ?? false));

  login(user: User) {
    this.userSubject.next(user);
  }

  logout() {
    this.userSubject.next(null);
  }
}
