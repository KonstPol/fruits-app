import { useSelector } from "react-redux";

import { PieChart, PieValueType } from "@mui/x-charts";

import { Fruit, FruitState } from "../models/fruits";
import { PieData } from "../models/chart-data";
import { toPieChart } from "../utils/transformData";

import styles from "../css/FruitsInfo.module.css";

const FruitsInfo: React.FC<any> = () => {
    const fruits: Fruit[] = useSelector((state: FruitState) => state.selectedFruits);
    const fruits1: Fruit[] = useSelector((state: FruitState) => state.groupedFruits);
    
    const pieChartData: PieData[] = toPieChart([...fruits, ...fruits1]);

    const pieChartConfig = [
        {
            data: pieChartData,
            arcLabel: (item: PieValueType) => `${item.value}`,
        },
    ]

    return (
        <div className={styles.rightColumn}>
            <div className={styles.chartWrapper}>
                <PieChart
                    series={pieChartConfig}
                    width={450}
                    height={450}
                    localeText={{
                        noData: 'Select some data to display.',
                    }}
                />
            </div>
        </div>
    );
};

export default FruitsInfo;