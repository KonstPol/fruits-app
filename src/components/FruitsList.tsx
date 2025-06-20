import { useState } from "react";
import { useSelector } from "react-redux";

import FruitListView from "./FruitListView";
import FruitColumnView from "./FruitColumnView";
import Form from "./Form";
import GropList from "./GropList";

import { Fruit, FruitState } from "../models/fruits";

import { groupBy } from "../utils/groupBy";

import styles from "../css/FruitsLits.module.css";

const FruitsLits: React.FC<any> = () => {
    const [isListView, setListView] = useState(true);
    const [groupedFruots, setGroupedFruits] = useState<any>({
        isGrouped: false,
        data: {}
    });

    const fruits: Fruit[] = useSelector((state: FruitState) => state.allFruits);

    const listViewHandler = () => {
        setListView(true);
    };

    const columnViewHandler = () => {
        setListView(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const groingItem = event.target.value;

        if (groingItem === 'none') {
            const stateData = {
                isGrouped: false,
                data: fruits
            };

            setGroupedFruits(stateData);
        } else {
            const groupedFruits = groupBy(fruits, groingItem);
            const stateData = {
                isGrouped: true,
                data: groupedFruits
            };

            setGroupedFruits(stateData);
        }
    };

    return (
        <div>
            <div className={styles.buttonViewWrapper}>
                <button onClick={listViewHandler}>List View</button>
                <button onClick={columnViewHandler}>Column View</button>
            </div>
            <Form>
                <label htmlFor="fruits">Grouped by</label>
                <select name="fruits" id="fruits" onChange={handleChange}>
                    <option value="none" defaultValue="none">None</option>
                    <option value="family">Family</option>
                    <option value="order">Order</option>
                    <option value="genus">Genus</option>
                </select>
            </Form>
            
            { (isListView && !groupedFruots.isGrouped) && <FruitListView fruits={fruits} /> }
            { (!isListView && !groupedFruots.isGrouped) && <FruitColumnView fruits={fruits} /> }

            { groupedFruots.isGrouped && <GropList fruit={groupedFruots} /> } 
        </div>
    )
};

export default FruitsLits;