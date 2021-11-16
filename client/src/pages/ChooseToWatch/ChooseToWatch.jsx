import React from "react";
import styles from "./ChooseToWatch.module.css";
import ChooseToWatchCard from "../../components/ChooseToWatchCard/ChooseToWatchCard";
import { useSelector , useDispatch} from "react-redux";

export default function ChooseToWatchPage(){
  const store = useSelector((state) => state.CardReducer);
  const {cards, choosenCards} = store;
  const dispatch = useDispatch();
  return(
    <div className={styles.wrapper}>
      {cards.map((data) => {
      return (
        <ChooseToWatchCard data={data} choosenCards={choosenCards} key={data.id} dispatch={dispatch}/>
      )
    })}
    </div>
  )
};