export interface Fruit  {
    name: string,
    id: number,
    family: string,
    order: string,
    genus: string,
    nutritions: Nutritions,
};

export interface Nutritions {
    calories: number,
    fat: number,
    sugar: number,
    carbohydrates: number,
    protein: number,
}

export interface FruitState {
    allFruits: Fruit[],
    selectedFruits: Fruit[],
    groupedFruits: Fruit[],
}