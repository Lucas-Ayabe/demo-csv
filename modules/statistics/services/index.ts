import { CsvService } from "@csv/services";
import { StatisticService } from "./statistic.service";

export * from "./statistic.service";
export const statisticService = new StatisticService(new CsvService());
