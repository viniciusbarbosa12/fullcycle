import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ProductFilter = {
  search: string;
  category: string | null;
};

const initialFilter: ProductFilter = {
  search: '',
  category: null
};

@Injectable({ providedIn: 'root' })
export class SharedFilterService {
  private readonly filterSubject = new BehaviorSubject<ProductFilter>(initialFilter);

  readonly filter$ = this.filterSubject.asObservable();

  setSearch(search: string) {
    this.filterSubject.next({
      ...this.filterSubject.value,
      search
    });
  }

  setCategory(category: string | null) {
    this.filterSubject.next({
      ...this.filterSubject.value,
      category
    });
  }

  reset() {
    this.filterSubject.next(initialFilter);
  }
}
