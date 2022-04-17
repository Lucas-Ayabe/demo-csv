export interface Monoid<T> {
  empty: T;
  concat: (u: T, v: T) => T;
}
