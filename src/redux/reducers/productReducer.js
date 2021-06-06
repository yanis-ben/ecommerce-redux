import {ActionTypes} from "../contants/action-types";

const initialeState = {
    products:[
        {
            id : 1,
            title: "dipesh",
            category : "programmer",
        },
    ],
};

//create reducer
export const productReducer = (state = initialeState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
    
        default:
            return state;
    }
}