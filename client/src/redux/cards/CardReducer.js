
const initialState = {
  cards : [],
  choosenCards : []
}

const QuoteReducer = (state = initialState,action) => {
  switch(action.type) {
    case 'LOAD_CARDS':{
      return{
        ...state,
        cards : action.payload
      }
    }
    case 'SET_CHOOSEN_CARDS':{
      return{
        ...state,
        choosenCards : state.choosenCards.includes(action.payload)
        ? state.choosenCards.filter(arr => arr!==action.payload)
        : [...state.choosenCards, action.payload]
      }
    }
    default:
      return state;
  }
}

export default QuoteReducer;