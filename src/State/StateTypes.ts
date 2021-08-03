
export enum EActionTypes {
    ADDED_ITEM = "added-item",
    REMOVE_ITEM = "remove-item"
}

export interface IProductItem {
    id: string
    title: string
    description: string
    price: number
    imageURL: string
}

export interface IAddedItem {
    type : EActionTypes.ADDED_ITEM
    payload: IProductItem
}
export interface IRemoveItem {
    type : EActionTypes.REMOVE_ITEM
    payload: IProductItem
}

export type IAction = IAddedItem | IRemoveItem
