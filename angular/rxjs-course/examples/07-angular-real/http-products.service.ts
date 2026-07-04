import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
};

@Injectable({ providedIn: 'root' })
export class HttpProductsService {
  constructor(private readonly http: HttpClient) {}

  search(term: string): Observable<Product[]> {
    const params = new HttpParams().set('q', term);
    return this.http.get<Product[]>('/api/products', { params });
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`/api/products/${id}`);
  }
}
