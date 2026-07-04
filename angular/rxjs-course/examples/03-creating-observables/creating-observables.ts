import { Observable, from, fromEvent, interval, of, take, timer } from 'rxjs';

of('Angular', 'RxJS', '.NET').subscribe(value => {
  console.log('of:', value);
});

from(['Angular', 'RxJS', '.NET']).subscribe(value => {
  console.log('from array:', value);
});

from(Promise.resolve({ id: 1, name: 'Ana' })).subscribe(user => {
  console.log('from promise:', user);
});

fromEvent<KeyboardEvent>(document, 'keydown')
  .pipe(take(3))
  .subscribe(event => {
    console.log('tecla:', event.key);
  });

interval(1000)
  .pipe(take(5))
  .subscribe({
    next: value => console.log('interval:', value),
    complete: () => console.log('interval completou')
  });

timer(2000).subscribe(() => {
  console.log('timer depois de 2 segundos');
});

const clock$ = new Observable<Date>(subscriber => {
  const intervalId = setInterval(() => {
    subscriber.next(new Date());
  }, 1000);

  // Cleanup: roda quando alguem chama unsubscribe.
  return () => clearInterval(intervalId);
});

const clockSubscription = clock$.subscribe(date => {
  console.log('clock:', date.toLocaleTimeString());
});

setTimeout(() => {
  clockSubscription.unsubscribe();
}, 5000);
