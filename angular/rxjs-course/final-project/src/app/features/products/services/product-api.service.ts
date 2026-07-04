import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Product, ProductPage, ProductQuery } from '../models/product.models';

@Injectable({ providedIn: 'root' })
export class ProductApiService {
  private readonly detailCache = new Map<number, Observable<Product>>();

  private readonly categoriesCache$ = this.http.get<string[]>('/api/products/categories').pipe(
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(private readonly http: HttpClient) {}

  search(query: ProductQuery): Observable<ProductPage> {
    let params = new HttpParams()
      .set('search', query.search)
      .set('page', query.page)
      .set('pageSize', query.pageSize);

    if (query.category) {
      params = params.set('category', query.category);
    }

    return this.http.get<ProductPage>('/api/products', { params });
  }

  getCategories(): Observable<string[]> {
    return this.categoriesCache$;
  }

  getById(id: number): Observable<Product> {
    const cached = this.detailCache.get(id);

    if (cached) {
      return cached;
    }

    const request$ = this.http.get<Product>(`/api/products/${id}`).pipe(
      shareReplay({ bufferSize: 1, refCount: true })
    );

    this.detailCache.set(id, request$);
    return request$;
  }

  clearDetailCache(id?: number) {
    if (id === undefined) {
      this.detailCache.clear();
      return;
    }

    this.detailCache.delete(id);
  }
}
