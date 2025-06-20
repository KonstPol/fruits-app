import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchApi } from "./api/fetchApi";
import { storeActions } from "./store/index";

import { Fruit } from "./models/fruits";

import FruitsInfo from './components/FruitsInfo';
import FruitsLits from './components/FruitsList';
import Loader from "./components/Loader";

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchApi('/api/fruits');

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result: Fruit[] = await response.json();

        dispatch(storeActions.saveFruits(result));
      } catch(error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [dispatch]);

  return (
    <div className="App">
     <div className="container">
       { isLoading && <Loader /> }

        { !isLoading && <>
            <FruitsLits />
            <FruitsInfo />
          </>
        }
     </div>
    </div>
  );
}

export default App;
