import { actionDetail } from "../contants/contants"
const initialState = {
    detail: {},

};

const reducerDetail = (state = initialState, action) => {
    switch (action.type) {
        case actionDetail.GET_DETAIL_PRODUCT:
            return {
                ...state,
                detail: action.payload
            }
        default:
            return { ...state };
    }
};
export default reducerDetail;
