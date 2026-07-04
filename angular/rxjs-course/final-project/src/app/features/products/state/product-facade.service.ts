import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  of,
  shareReplay,
  startWith,
  switchMap
} from 'rxjs';
import { DetailState, LoadState, Product, ProductPage, ProductQuery } from '../models/product.models';
import { ProductApiService } from '../services/product-api.service';

@Injectable()
export class ProductFacadeService {
  private readonly pageSize = 10;

  private readonly searchSubject = new BehaviorSubject('');
  private readonly categorySubject = new BehaviorSubject<string | null>(null);
  private readonly pageSubject = new BehaviorSubject(1);
  private readonly selectedProductIdSubject = new BehaviorSubject<number | null>(null);

  readonly categories$ = this.api.getCategories().pipe(
    shareReplay({ bufferSize: 1, refCount: true })
  );

  readonly query$ = combineLatest([
    this.searchSubject.pipe(distinctUntilChanged()),
    this.categorySubject.pipe(distinctUntilChanged()),
    this.pageSubject.pipe(distinctUntilChanged())
  ]).pipe(
    debounceTime(250),
    map(([search, category, page]) => ({
      search,
      category,
      page,
      pageSize: this.pageSize
    }) satisfies ProductQuery),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  readonly productsState$ = this.query$.pipe(
    switchMap(query => this.loadProducts(query)),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  readonly selectedProductState$ = this.selectedProductIdSubject.pipe(
    distinctUntilChanged(),
    switchMap(id => {
      if (id === null) {
        return of({ status: 'idle' } satisfies DetailState<Product>);
      }

      return this.api.getById(id).pipe(
        map(data => ({ status: 'success', data }) satisfies DetailState<Product>),
        startWith({ status: 'loading' } satisfies DetailState<Product>),
        catchError(() =>
          of({ status: 'error', message: 'Falha ao carregar detalhe do produto' } satisfies DetailState<Product>)
        )
      );
    }),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(private readonly api: ProductApiService) {}

  setSearch(search: string) {
    this.searchSubject.next(search.trim());
    this.pageSubject.next(1);
  }

  setCategory(category: string | null) {
    this.categorySubject.next(category);
    this.pageSubject.next(1);
  }

  setPage(page: number) {
    if (page < 1) {
      return;
    }

    this.pageSubject.next(page);
  }

  selectProduct(id: number) {
    this.selectedProductIdSubject.next(id);
  }

  clearSelectedProduct() {
    this.selectedProductIdSubject.next(null);
  }

  private loadProducts(query: ProductQuery) {
    return this.api.search(query).pipe(
      map(data => ({ status: 'success', data }) satisfies LoadState<ProductPage>),
      startWith({ status: 'loading' } satisfies LoadState<ProductPage>),
      catchError(() =>
        of({ status: 'error', message: 'Falha ao buscar produtos. Tente novamente.' } satisfies LoadState<ProductPage>)
      )
    );
  }
}
