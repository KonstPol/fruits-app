import { Fruit } from "../models/fruits";

import styles from "../css/GroupList.module.css";
import { useDispatch } from "react-redux";
import { storeActions } from "../store";

const GropList: React.FC<any> = ({ fruit }) => {
    const dispatch = useDispatch();

    const fruitSelectHandler = (fruit: Fruit) => {
        dispatch(storeActions.selectFrut(fruit));
    };
    
    const groupSelectHandler = (fruit: Fruit[]) => {
        dispatch(storeActions.selectFruts(fruit));
    };

    return (
        <div className={styles.gropuListWrapper}>
            {
                Object.entries(fruit.data).map(([group, data]) => {
                    return (
                         <details key={group} style={{ marginBottom: '1rem' }}>
                            <summary className={styles.summaryWrapper} style={{ fontWeight: 'bold' }}>
                                {group}
                                <button onClick={() => {groupSelectHandler(data as Fruit[])}}>
                                    Add Group
                                </button>
                            </summary>
                            <ul>
                                {
                                    (data as Fruit[]).map((fruit: Fruit, idx: number) => (
                                        <li key={idx}>{fruit.name} ({fruit.nutritions.calories})
                                            <button onClick={() => {fruitSelectHandler(fruit)}}>
                                                Add
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </details>
                    )
                })
            }
        </div>
    )
};

export default GropList;