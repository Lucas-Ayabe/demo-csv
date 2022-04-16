export interface Statistic {
  name: string;
  total: number;
  purchase: number;
  huntedMonsters: {
    level1: number;
    level2: number;
    level3: number;
    level4: number;
  };
  pointsPerHunt: number;
}
