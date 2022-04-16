import { readFile } from "fs/promises";

export const fileSource = (path: string) => async (): Promise<string> => {
  return (await readFile(path)).toString();
};
