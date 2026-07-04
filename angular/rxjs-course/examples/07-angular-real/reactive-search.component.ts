import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, map, of, startWith, switchMap } from 'rxjs';
import { HttpProductsService, Product } from './http-products.service';
import { LoadState } from './load-state';

@Component({
  selector: 'app-reactive-search',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <input [formControl]="searchControl" placeholder="Buscar produto" />

    @if (state$ | async; as state) {
      @switch (state.status) {
        @case ('loading') {
          <p>Carregando...</p>
        }
        @case ('error') {
          <p>{{ state.message }}</p>
        }
        @case ('success') {
          @for (product of state.data; track product.id) {
            <p>{{ product.name }} - {{ product.price | currency:'BRL' }}</p>
          }
        }
      }
    }
  `
})
export class ReactiveSearchComponent {
  readonly searchControl = new FormControl('', { nonNullable: true });

  readonly state$ = this.searchControl.valueChanges.pipe(
    startWith(this.searchControl.value),
    map(term => term.trim()),
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(term =>
      this.productsService.search(term).pipe(
        map(data => ({ status: 'success', data }) satisfies LoadState<Product[]>),
        startWith({ status: 'loading' } satisfies LoadState<Product[]>),
        catchError(() => of({ status: 'error', message: 'Falha ao buscar produtos' } satisfies LoadState<Product[]>))
      )
    )
  );

  constructor(private readonly productsService: HttpProductsService) {}
}
