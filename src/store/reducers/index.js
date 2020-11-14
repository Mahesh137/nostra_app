import { combineReducers } from "redux";
import { bannerDataReducer, tabDataReducer, cardDataReducer } from "./dashboardReducer"

export default combineReducers({
    bannerDataReducer, tabDataReducer, cardDataReducer
});
