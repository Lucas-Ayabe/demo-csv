import { parse } from "csv-parse/sync";

export class CsvService {
  async parse(content: string) {
    return parse(content, {
      columns: true,
      skipEmptyLines: true,
    });
  }

  async parseFrom(source: () => Promise<string>) {
    return this.parse(await source());
  }
}
