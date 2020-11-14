import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    data: []
};

const bannerDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_BANNER_DATA:
            return {
                ...state,
                data: [...action.data]
            };
        default:
            return state;
    }
};

const tabDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_TAB_DATA:
            return {
                ...state,
                data: [...action.data]
            };
        default:
            return state;
    }
};

const cardDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_CARD_DATA:
            return {
                ...state,
                data: [...action.data]
            };
        default:
            return state;
    }
};


export { bannerDataReducer, tabDataReducer, cardDataReducer };
