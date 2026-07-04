import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, of, startWith, switchMap } from 'rxjs';
import { HttpProductsService, Product } from './http-products.service';
import { LoadState } from './load-state';

@Component({
  selector: 'app-route-detail',
  standalone: true,
  imports: [AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (state$ | async; as state) {
      @switch (state.status) {
        @case ('loading') {
          <p>Carregando produto...</p>
        }
        @case ('error') {
          <p>{{ state.message }}</p>
        }
        @case ('success') {
          <h2>{{ state.data.name }}</h2>
          <p>{{ state.data.category }}</p>
        }
      }
    }
  `
})
export class RouteDetailComponent {
  readonly state$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    switchMap(id =>
      this.productsService.getById(id).pipe(
        map(data => ({ status: 'success', data }) satisfies LoadState<Product>),
        startWith({ status: 'loading' } satisfies LoadState<Product>),
        catchError(() => of({ status: 'error', message: 'Produto nao encontrado' } satisfies LoadState<Product>))
      )
    )
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productsService: HttpProductsService
  ) {}
}
