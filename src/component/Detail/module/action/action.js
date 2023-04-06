import axios from "axios"
import { actionDetail } from "../contants/contants"
import API from "../../../../Axios/API";
import { useDispatch } from "react-redux";
export const functionDetail = () => {
    const fetchDetailproduct = async (id, dispatch) => {
        // const dispatch = useDispatch()
        try {
            const res = await API(`/product/${id}`, "GET");
            dispatch({ type: actionDetail.GET_DETAIL_PRODUCT, payload: res.data })
        } catch (err) {
            console.log(err)
        }
    }
    return {
        fetchDetailproduct
    }
}