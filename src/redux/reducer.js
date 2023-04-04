import { combineReducers } from "redux";
import reducerURL from "../component/ListProduct/Module/Reducers/reducer";
import reducerCart from"../component/Cart/module/reducer/reducer"
import reducerSignUp from "../component/Navbar/NavmainComponent/module/reducer/reducer"
const rootReducer= combineReducers({
    reducerURL,
    reducerCart,
    reducerSignUp,
})
export default rootReducer