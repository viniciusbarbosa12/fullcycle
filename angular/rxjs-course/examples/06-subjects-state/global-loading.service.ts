import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GlobalLoadingService {
  private readonly pendingRequestsSubject = new BehaviorSubject(0);

  readonly isLoading$ = this.pendingRequestsSubject.pipe(
    map(count => count > 0)
  );

  show() {
    this.pendingRequestsSubject.next(this.pendingRequestsSubject.value + 1);
  }

  hide() {
    this.pendingRequestsSubject.next(Math.max(0, this.pendingRequestsSubject.value - 1));
  }
}
