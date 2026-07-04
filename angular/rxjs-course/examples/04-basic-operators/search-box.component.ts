import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <label>
      Buscar
      <input [formControl]="searchControl" placeholder="Digite ao menos 3 letras" />
    </label>

    @if (searchTerm$ | async; as term) {
      <p>Termo valido: {{ term }}</p>
    }
  `
})
export class SearchBoxComponent {
  readonly searchControl = new FormControl('', { nonNullable: true });

  readonly searchTerm$ = this.searchControl.valueChanges.pipe(
    startWith(this.searchControl.value),
    map(term => term.trim()),
    filter(term => term.length >= 3),
    debounceTime(300),
    distinctUntilChanged()
  );
}
