import React from "react";
import styles from './ChooseToWatchCard.module.css';
import Checkbox from '@mui/material/Checkbox';
import { setchoosenCards } from "../../redux/cards/actions";

export default function ChooseToWatchCard(props){
  const { data:{ticker},choosenCards} = props;
  const checked = choosenCards.includes(ticker)
  
  const handleChange = () => {
    return(props.dispatch(setchoosenCards(ticker)));
  }
  return(
    <div className={styles.wrapper}>
      <h2>{ticker}</h2>
      <Checkbox 
      onChange={handleChange}
      checked={checked}
      />
    </div>
  )
}