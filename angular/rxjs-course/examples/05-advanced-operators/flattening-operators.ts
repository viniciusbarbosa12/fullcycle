import { concatMap, delay, exhaustMap, from, interval, mergeMap, of, switchMap, take } from 'rxjs';

function fakeHttp(label: string, ms: number) {
  return of(`resposta de ${label}`).pipe(delay(ms));
}

// switchMap: cancela o anterior e fica com o mais recente.
interval(300)
  .pipe(
    take(3),
    switchMap(value => fakeHttp(`busca ${value}`, 1000))
  )
  .subscribe(value => console.log('switchMap:', value));

// mergeMap: roda em paralelo.
from([1, 2, 3])
  .pipe(mergeMap(id => fakeHttp(`processar ${id}`, 700)))
  .subscribe(value => console.log('mergeMap:', value));

// concatMap: roda um por vez, mantendo ordem.
from([1, 2, 3])
  .pipe(concatMap(id => fakeHttp(`salvar ${id}`, 700)))
  .subscribe(value => console.log('concatMap:', value));

// exhaustMap: ignora novas emissoes enquanto a atual esta rodando.
interval(300)
  .pipe(
    take(5),
    exhaustMap(value => fakeHttp(`login tentativa ${value}`, 1000))
  )
  .subscribe(value => console.log('exhaustMap:', value));
