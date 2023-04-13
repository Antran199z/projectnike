import { actionDetail } from "../constant/constant"
const initialState = {
    detail: {},
    loading: false,
    listDetail: {},
    largeImage: {}
};

const reducerDetail = (state = initialState, action) => {
    switch (action.type) {
        case actionDetail.GET_DETAIL_PRODUCT:
            return {
                ...state,
                detail: action.payload
            }
        case actionDetail.LOADING:
            return {
                ...state,
                loading: true
            }
        case actionDetail.GET_LIST_DETAIL:
            return {
                ...state,
                listDetail: action.payload
            }
        case actionDetail.GET_LARGE_IMAGE:
            return {
                ...state,
                largeImage: action.payload
            }

        default:
            return { ...state };
    }
};
export default reducerDetail;
