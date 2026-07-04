import { combineLatest, delay, forkJoin, of, Subject, withLatestFrom, zip } from 'rxjs';

const search$ = new Subject<string>();
const category$ = new Subject<string>();
const page$ = new Subject<number>();

combineLatest([search$, category$, page$]).subscribe(([search, category, page]) => {
  console.log('buscar produtos:', { search, category, page });
});

search$.next('notebook');
category$.next('eletronicos');
page$.next(1);
page$.next(2);

forkJoin({
  user: of({ id: 1, name: 'Ana' }).pipe(delay(300)),
  permissions: of(['products:read']).pipe(delay(500))
}).subscribe(result => {
  console.log('dados iniciais:', result);
});

zip(of('Ana', 'Bruno'), of(30, 40)).subscribe(([name, age]) => {
  console.log('zip:', name, age);
});

const saveClick$ = new Subject<void>();
const formValue$ = new Subject<{ name: string }>();

saveClick$
  .pipe(withLatestFrom(formValue$))
  .subscribe(([, form]) => {
    console.log('salvar formulario:', form);
  });

formValue$.next({ name: 'Produto A' });
saveClick$.next();
