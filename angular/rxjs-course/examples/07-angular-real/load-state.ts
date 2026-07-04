export type LoadState<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

export function loading<T>(): LoadState<T> {
  return { status: 'loading' };
}

export function success<T>(data: T): LoadState<T> {
  return { status: 'success', data };
}

export function failure<T>(message: string): LoadState<T> {
  return { status: 'error', message };
}
