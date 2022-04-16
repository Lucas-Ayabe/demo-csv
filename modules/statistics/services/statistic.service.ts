import { CsvService, fileSource } from "@csv/services";
import { Statistic } from "../domain/model/statistic";

export class StatisticService {
  constructor(private csvService: CsvService) {}

  async importFromCsv(path: string): Promise<Statistic[]> {
    return (await this.csvService.parseFrom(fileSource(path))).map(
      (record: any): Statistic => ({
        name: record.Name,
        huntedMonsters: {
          level1: +record["L1 (Hunt)"],
          level2: +record["L2 (Hunt)"],
          level3: +record["L3 (Hunt)"],
          level4: +record["L4 (Hunt)"],
        },
        pointsPerHunt: +record["Points (Hunt)"],
        purchase: +record.Purchase,
        total: +record.Total,
      })
    );
  }
}
