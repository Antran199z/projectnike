import { actionDetail } from "../constant/constant"
const initialState = {
    detail: {},
    loading: false
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
        default:
            return { ...state };
    }
};
export default reducerDetail;
