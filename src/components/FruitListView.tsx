import { useDispatch } from "react-redux";

import { storeActions } from "../store";

import { Fruit } from "../models/fruits";

import styles from "../css/FruitsLits.module.css";

const FruitListView: React.FC<{ fruits: Fruit[]}> = ({ fruits }) => {
    const dispatch = useDispatch();
    const fruitSelectHandler = (fruit: Fruit) => {
        dispatch(storeActions.selectFrut(fruit));
    };

    return (
        <ul className={styles.fruitsList}>
            {fruits.map((fruit: Fruit) => {
                return <li key={fruit.id}>
                    {fruit.name} ({fruit.nutritions.calories})
                        <button onClick={() => {fruitSelectHandler(fruit)}}>
                            Add
                        </button>
                    </li>    
                })
            }
        </ul>
    )
}

export default FruitListView;