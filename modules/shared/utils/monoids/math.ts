import { fold } from "./fold";
import { Monoid } from "./monoid";

export const Sum: Monoid<number> = {
  empty: 0,
  concat: (u, v) => u + v,
};

export const foldSum = fold(Sum);
