import { useDispatch } from "react-redux";

import { storeActions } from "../store";

import { Fruit } from "../models/fruits";

const FruitColumnView: React.FC<{ fruits: Fruit[]}> = ({ fruits }) => {
    const dispatch = useDispatch();
    const fruitSelectHandler = (fruit: Fruit) => {
        dispatch(storeActions.selectFrut(fruit));
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Family</th>
                    <th>Order</th>
                    <th>Genus</th>
                    <th>Calories</th>
                </tr>
            </thead>
            <tbody>
                {fruits.map((fruit: Fruit, idx: number) => (
                    <tr key={fruit.id}>
                        <td>{fruit.name}</td>
                        <td>{fruit.family}</td>
                        <td>{fruit.order}</td>
                        <td>{fruit.genus}</td>
                        <td>
                            {fruit.nutritions.calories}
                            <button onClick={() => {fruitSelectHandler(fruit)}}>
                                Add
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default FruitColumnView;