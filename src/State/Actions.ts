import { Dispatch } from "redux"
import { EActionTypes, IBasketAction, IProductItem } from "./StateTypes"

const AddedItem = (item:IProductItem) => {
    return(dispatch:Dispatch<IBasketAction>) => {
        dispatch({
            type : EActionTypes.ADDED_ITEM,
            payload : item
        })
    }
}

const RemoveItem = (item:IProductItem) => {
    return (dispatch:Dispatch<IBasketAction>) => {
        dispatch({
            type : EActionTypes.REMOVE_ITEM,
            payload : item
        })
    }
}

export { AddedItem, RemoveItem }

