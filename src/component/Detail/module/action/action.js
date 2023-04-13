import axios from "axios"
import { actionDetail } from "../constant/constant"
import API from "../../../../Axios/API";
import { useDispatch } from "react-redux";
export const functionDetail = () => {
    const fetchDetailproduct = async (id, dispatch) => {
        // const dispatch = useDispatch()
        try {
            const res = await API(`/product/${id}`, "GET");
            if (res.status === 201 || res?.status === 200) {
                dispatch({ type: actionDetail.GET_DETAIL_PRODUCT, payload: res.data })
                dispatch({ type: actionDetail.LOADING, payload: true })
                const listDetail = res.data?.imgDetails[0]
                dispatch({ type: actionDetail.GET_LIST_DETAIL, payload: listDetail })
                dispatch({ type: actionDetail.GET_LARGE_IMAGE, payload: res.data?.img })
            }
        } catch (err) {
            console.log(err)
        }
    }
    return {
        fetchDetailproduct
    }
}