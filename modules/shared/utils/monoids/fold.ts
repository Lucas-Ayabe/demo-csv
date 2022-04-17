import { Monoid } from "./monoid";

export const fold =
  <T>(monoid: Monoid<T>) =>
  (list: T[]) => {
    return list.reduce(monoid.concat, monoid.empty);
  };
