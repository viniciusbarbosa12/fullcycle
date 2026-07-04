import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

@Injectable({ providedIn: 'root' })
export class CartStateService {
  private readonly itemsSubject = new BehaviorSubject<CartItem[]>([]);

  readonly items$ = this.itemsSubject.asObservable();
  readonly count$ = this.items$.pipe(
    map(items => items.reduce((total, item) => total + item.quantity, 0))
  );
  readonly total$ = this.items$.pipe(
    map(items => items.reduce((total, item) => total + item.price * item.quantity, 0))
  );

  add(item: CartItem) {
    const current = this.itemsSubject.value;
    const existing = current.find(currentItem => currentItem.id === item.id);

    if (!existing) {
      this.itemsSubject.next([...current, item]);
      return;
    }

    this.itemsSubject.next(
      current.map(currentItem =>
        currentItem.id === item.id
          ? { ...currentItem, quantity: currentItem.quantity + item.quantity }
          : currentItem
      )
    );
  }

  remove(id: number) {
    this.itemsSubject.next(this.itemsSubject.value.filter(item => item.id !== id));
  }

  clear() {
    this.itemsSubject.next([]);
  }
}
