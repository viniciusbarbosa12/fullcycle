import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, debounceTime, distinctUntilChanged, map, of, shareReplay, startWith, switchMap } from 'rxjs';

type Product = {
  id: number;
  name: string;
  category: string;
};

type ProductPage = {
  items: Product[];
  page: number;
  total: number;
};

type ProductQuery = {
  search: string;
  category: string | null;
  page: number;
};

type LoadState<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

type ProductApi = {
  search(query: ProductQuery): import('rxjs').Observable<ProductPage>;
  categories(): import('rxjs').Observable<string[]>;
};

@Injectable()
export class ProductsFacade {
  private readonly searchSubject = new BehaviorSubject('');
  private readonly categorySubject = new BehaviorSubject<string | null>(null);
  private readonly pageSubject = new BehaviorSubject(1);

  readonly categories$ = this.api.categories().pipe(
    shareReplay({ bufferSize: 1, refCount: true })
  );

  readonly productsState$ = combineLatest([
    this.searchSubject.pipe(distinctUntilChanged()),
    this.categorySubject.pipe(distinctUntilChanged()),
    this.pageSubject.pipe(distinctUntilChanged())
  ]).pipe(
    debounceTime(250),
    switchMap(([search, category, page]) =>
      this.loadProducts({ search, category, page })
    ),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(private readonly api: ProductApi) {}

  setSearch(search: string) {
    this.searchSubject.next(search.trim());
    this.pageSubject.next(1);
  }

  setCategory(category: string | null) {
    this.categorySubject.next(category);
    this.pageSubject.next(1);
  }

  setPage(page: number) {
    this.pageSubject.next(page);
  }

  private loadProducts(query: ProductQuery) {
    return this.api.search(query).pipe(
      map(data => ({ status: 'success', data }) satisfies LoadState<ProductPage>),
      startWith({ status: 'loading' } satisfies LoadState<ProductPage>),
      catchError(() => of({ status: 'error', message: 'Falha ao carregar produtos' } satisfies LoadState<ProductPage>))
    );
  }
}
