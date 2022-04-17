export const withNumber = (fn: (value: number) => any) => (n: any) =>
  fn(Number(n));
