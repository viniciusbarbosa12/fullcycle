import { debounceTime, distinctUntilChanged, filter, first, from, map, of, skip, take, tap } from 'rxjs';

type User = {
  id: number;
  name: string;
  active: boolean;
  role: 'admin' | 'user';
};

const users: User[] = [
  { id: 1, name: 'Ana', active: true, role: 'admin' },
  { id: 2, name: 'Bruno', active: false, role: 'user' },
  { id: 3, name: 'Carla', active: true, role: 'user' }
];

from(users)
  .pipe(
    filter(user => user.active),
    map(user => user.name),
    tap(name => console.log('usuario ativo encontrado:', name))
  )
  .subscribe();

of(10, 20, 30, 40)
  .pipe(take(2))
  .subscribe(value => console.log('take:', value));

from(users)
  .pipe(first(user => user.role === 'admin'))
  .subscribe(admin => console.log('primeiro admin:', admin.name));

of('valor inicial', 'valor real 1', 'valor real 2')
  .pipe(skip(1))
  .subscribe(value => console.log('skip:', value));

// Simula termos digitados em uma busca.
of('a', 'an', 'ana', 'ana', 'ana c')
  .pipe(
    map(term => term.trim()),
    filter(term => term.length >= 3),
    debounceTime(300),
    distinctUntilChanged()
  )
  .subscribe(term => console.log('buscar por:', term));
