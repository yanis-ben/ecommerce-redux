import { combineReducers } from "redux";
import { productReducer } from "./productReducer"

const reducers = combineReducers({
    //create key
    allProducts: productReducer,
})

export default reducers;