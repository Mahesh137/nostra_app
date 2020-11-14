import * as actionTypes from "./actionTypes";
import { axiosDashboardData } from "../../utils/apis/axiosInstances";


const setBannerData = (data) => ({
    type: actionTypes.SET_BANNER_DATA,
    data: data.banners
});

const setTabData = (data) => ({
    type: actionTypes.SET_TAB_DATA,
    data: data.sports
});

const setCardData = (data) => ({
    type: actionTypes.SET_CARD_DATA,
    data: data.challenges
});

export const getDashboardData = (pIndex) => (dispatch) => {

    console.log("called")
    axiosDashboardData({
        method: "GET",
        data: {},
        params: {}
    })
        .then((res) => {
            dispatch(setBannerData(JSON.parse(res.data)))
            dispatch(setTabData(JSON.parse(res.data)))
            dispatch(setCardData(JSON.parse(res.data)))

        })
        .catch(err => {
            console.log(`Error getting categories data: ${err}`)
        })
}



