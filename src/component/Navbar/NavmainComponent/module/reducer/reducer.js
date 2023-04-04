import { SignInSignUpAction } from "../constants/constants";
const userLocal = JSON.parse(localStorage.getItem("user"));
let initialState = {
  open: false,
  openSu: false,
  user: userLocal,
  dataAll: [],
  dataSearchList: [],
  dataSuggest: [],
  isAdmin: false,
  dataUser: {
    name: "",
    email: "",
    password: "",
    age: "",
    userType: "user",
  },
  validateForm: {
    validUserName: {
      status: false,
      message: "",
    },
    validEmail: {
      status: false,
      message: "",
    },
    validPassword: {
      status: false,
      message: "",
    },
    validAge: {
      status: false,
      message: "",
      value:false
    },
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SignInSignUpAction.REDUX:
      state.open = action.data;
      break;
    case SignInSignUpAction.LOGOUT:
      state.user = action.payload;
      state.isAdmin = false;
      break;
    case SignInSignUpAction.FETCH_API_LOGIN:
      state.user = action.payload;
      state.open = false;
      break;
    case SignInSignUpAction.SET_DATA_NEW_USER_NAME:
      return {
        ...state,
        dataUser: {
          ...state.dataUser,
          name: action.payload,
        },
      };
    case SignInSignUpAction.SET_DATA_NEW_USER_EMAIL:
      return {
        ...state,
        dataUser: {
          ...state.dataUser,
          email: action.payload,
        },
      };
    case SignInSignUpAction.SET_DATA_NEW_USER_PASSWORD:
      return {
        ...state,
        dataUser: {
          ...state.dataUser,
          password: action.payload,
        },
      };
    case SignInSignUpAction.SET_DATA_NEW_USER_AGE:
      return {
        ...state,
        dataUser: {
          ...state.dataUser,
          age: action.payload,
        },
      };
    case SignInSignUpAction.SIGNUP:
      return {
        ...state,
        openSu: action.payload,
      };
    case SignInSignUpAction.SET_DATA_CREATE_USER:
      return {
        ...state,
        dataUser: {
          ...state.dataUser,
          ...action.payload,
        },
      };
    // case SignInSignUpAction.VALID_USER_NAME:
    //   return {
    //     ...state,
    //     validUserName: {
    //       ...state.validUserName,
    //       ...action.payload,
    //     },
    //   };
    // case SignInSignUpAction.VALID_USER_EMAIL:
      // return {
      //   ...state,
      //   validEmail: {
      //     ...state.validEmail,
      //     ...action.payload,
      //   },
      // };
    case SignInSignUpAction.VALIDATE_FORM:
      return{
        ...state,
        validateForm:{
          ...state.validateForm,
          ...action.payload,
        }
      }
  }
  return { ...state };
};
export default reducer;
