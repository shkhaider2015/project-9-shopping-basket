import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as ActionCreator from "./Actions";

export const useActions = () => {
    const dispatch = useDispatch();
    const {  AddedItem, RemoveItem } = bindActionCreators(ActionCreator, dispatch)

    return {
        AddedItem,
        RemoveItem
    }
}