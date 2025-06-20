import { Fruit } from "../models/fruits";

export const groupBy = (fruits: Fruit[], groupBy: string) => {
    return fruits.reduce((acc: Record<string, Fruit[]>, fruit: Fruit) => {
        const gruopName = fruit[groupBy as keyof Fruit] as string;

        if (!acc[gruopName as string]) {
            acc[gruopName as string] = [];
        }

        acc[gruopName as string].push(fruit);

        return acc;
    }, {})
}