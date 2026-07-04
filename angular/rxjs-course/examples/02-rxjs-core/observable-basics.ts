import { Observable, fromEvent } from 'rxjs';

const numbers$ = new Observable<number>(subscriber => {
  console.log('Observable frio iniciou');

  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();

  return () => {
    console.log('cleanup executado');
  };
});

numbers$.subscribe({
  next: value => console.log('A recebeu', value),
  error: error => console.error('A erro', error),
  complete: () => console.log('A completou')
});

numbers$.subscribe({
  next: value => console.log('B recebeu', value),
  complete: () => console.log('B completou')
});

// Exemplo de fonte quente: o clique acontece no documento.
// Novos subscribers passam a ouvir os proximos cliques, nao "reexecutam" o documento.
const clicks$ = fromEvent<MouseEvent>(document, 'click');

const subscription = clicks$.subscribe(event => {
  console.log('clique em', event.clientX, event.clientY);
});

setTimeout(() => {
  subscription.unsubscribe();
  console.log('parei de ouvir cliques');
}, 5000);
