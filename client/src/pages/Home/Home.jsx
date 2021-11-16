import React from "react";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";

export default function Home() {
  const store = useSelector((state) => state.CardReducer);
  const {cards, choosenCards} = store;
  
  return (<div className="wrapper">
    {choosenCards.length===0 && <h2>No cards have been selected</h2>}
    {cards.map((data) => {
      if(choosenCards.includes(data.ticker)){
        return (
          <Card props={data} key={data.id} />
        )
      }else{
        return null
      }
    })}
  </div>)
}