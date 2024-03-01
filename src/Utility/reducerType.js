import { red } from '@mui/material/colors'
import {Type} from './actionType'

export const initialState = {
    basket:[]
}

export const reducer = (state,action) => {
switch (action.type) {
    case Type.ADD_TO_BASKET:
        // check if the item is exist
        const isExist = state.basket.find(item => item.id === action.item.id)
        if(!isExist){
            // if the item is not exist, update the quantity
            return {
                ...state,
                basket: [...state.basket,{...action.item,amount:1}]
            }
        }else{
            // if the item is exist, add the item
            const updatedBasket = state.basket.map((item)=>{
                return  item.id === action.item.id? {...item,amount:item.amount + 1} : item
            })
            
            return {
             ...state,
                basket: updatedBasket
            }
        }
       
    
    default:
        return state;
}
}

// const [state, dispatch] = useReducer(reducer, initialState)