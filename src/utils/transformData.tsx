import { PieData } from "../models/chart-data";
import { Fruit } from "../models/fruits";

export const toPieChart = (fruits: Fruit[]): PieData[] => {
  return Object.values(
    fruits.reduce((acc: Record<string, PieData>, fruit: Fruit) => {
      if (!acc[fruit.id]) {
        acc[fruit.id] = {
          id: fruit.id,
          value: fruit.nutritions.calories,
          label: fruit.name,
        };
      } else {
        acc[fruit.id].value += fruit.nutritions.calories;
      }

      return acc;
    }, {})
  );
};