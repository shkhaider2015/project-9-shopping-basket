import { Dispatch } from "redux"
import { EActionTypes, IAction, IProductItem } from "./StateTypes"

const AddedItem = (item:IProductItem) => {
    return(dispatch:Dispatch<IAction>) => {
        dispatch({
            type : EActionTypes.ADDED_ITEM,
            payload : item
        })
    }
}

const RemoveItem = (item:IProductItem) => {
    return (dispatch:Dispatch<IAction>) => {
        dispatch({
            type : EActionTypes.REMOVE_ITEM,
            payload : item
        })
    }
}

export { AddedItem, RemoveItem }

