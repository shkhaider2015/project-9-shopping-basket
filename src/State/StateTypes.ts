import { Reducers } from "./Reducers"

export enum EActionTypes {
    ADDED_ITEM = "added-item",
    REMOVE_ITEM = "remove-item",
    GET_ITEMS = "get-items"
}

export interface IProductItem {
    id: string
    title: string
    description: string
    price: number
    imageURL: string
}
export type IBasketItem = IProductItem

export interface IAddedItem {
    type : EActionTypes.ADDED_ITEM
    payload: IProductItem
}
export interface IRemoveItem {
    type : EActionTypes.REMOVE_ITEM
    payload: IProductItem
}
export interface IProductAction {
    type : EActionTypes.GET_ITEMS
}

export type IBasketAction = IAddedItem | IRemoveItem

export type IState = ReturnType<typeof Reducers>
