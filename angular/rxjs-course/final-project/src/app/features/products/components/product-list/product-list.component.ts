import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductFacadeService } from '../../state/product-facade.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, ProductDetailComponent],
  providers: [ProductFacadeService],
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly productsState$ = this.facade.productsState$;
  readonly categories$ = this.facade.categories$;

  constructor(readonly facade: ProductFacadeService) {}

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.facade.setSearch(input.value);
  }

  onCategoryChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.facade.setCategory(select.value || null);
  }
}
