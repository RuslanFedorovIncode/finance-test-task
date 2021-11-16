import React,{useEffect,useState} from "react";
import styles from "./Card.module.css";
import { red,green } from '@mui/material/colors';
import { Paper ,Typography} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


export default function Card(props) {
  const { ticker,price, change, change_percent,price_up } = props.props;
    const [colorOfArrow,setColorOfArrow] = useState(green[500])

    useEffect(() => {
      if(!price_up){
        const newColor = (red[500]);
        setColorOfArrow(newColor);
      }else{
        const newColor = (green[500]);
        setColorOfArrow(newColor);
      }
    }, [price_up])

  return (
    <Paper
      elevation={10}
      className={styles.paper}>
      <Typography component={'span'}>
        <h2>
          {price_up 
            ? <ArrowUpwardIcon sx={{ color: colorOfArrow}}/>
            : <ArrowDownwardIcon sx={{ color: colorOfArrow}}/>
        }
          {ticker}
        </h2>
      </Typography>
      <Typography >
        {`${price}$`}
      </Typography>
      <Typography color={colorOfArrow}>
        {price_up 
        ? `+${change}$`
        : `-${change}$`
        }
      </Typography>
      <Typography color={colorOfArrow}>
        {price_up
        ? `+${change_percent}%`
        : `-${change_percent}%`
        }
      </Typography>
    </Paper>
  )
}