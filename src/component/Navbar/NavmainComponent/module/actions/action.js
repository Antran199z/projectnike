import { display } from "@mui/system";
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import API from "../../../../../Axios/API";
import { SignInSignUpAction } from "../constants/constants";

// const dispatch = dispatch();
export const emitOpenAction = (open) => {
  return {
    type: SignInSignUpAction.REDUX,
    data: open,
  };
};
export const emitOpenSignUp = (openSU) => {
  console.log(openSU);
  return {
    type: SignInSignUpAction.SIGNUP,
    data: openSU,
  };
};
export const createAction = ({ type, payload }) => {
  return {
    type,
    payload,
  };
};
export const handleChangeName = (e, dispatch) => {
  const { value } = e.target;
  dispatch({
    type: SignInSignUpAction.SET_DATA_CREATE_USER,
    payload: {
      name: value,
    },
  });
};
export const handleChangeEmail = (e, dispatch) => {
  const { value } = e.target;
  dispatch({
    type: SignInSignUpAction.SET_DATA_CREATE_USER,
    payload: {
      email: value,
    },
  });
};
export const handleChangePassword = (e, dispatch) => {
  const { value } = e.target;
  dispatch({
    type: SignInSignUpAction.SET_DATA_CREATE_USER,
    payload: {
      password: value,
    },
  });
};
export const handleChangeAge = (e, dispatch) => {
  const regex = /^[0-9]*$/;
  const { value } = e.target;
  if (value === "" || regex.test(value)) {
    dispatch({
      type: SignInSignUpAction.SET_DATA_CREATE_USER,
      payload: {
        age: value,
      },
    });
  }
};
// console.log(handleChangeAge)
export const createNewUser = async (data) => {
  // try {
  //   const res = await API("users/create", "POST", data);
  //   if (res.status === 201) {
  //     alert("sucess");
  //     localStorage.setItem("user", JSON.stringify(res.data));
  //   }
  // } catch (err) {
  //   console.log(err);
  // }
  console.log(createNewUser(data));
};
export const fetchApiLoginUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await API("users/login", "POST", data);
      dispatch(
        createAction({
          type: SignInSignUpAction.FETCH_API_LOGIN,
          payload: res.data,
        })
      );
      localStorage.setItem("user", JSON.stringify(res.data));
      alert(res.data.messager);
      const userLocal = JSON.parse(localStorage.getItem("user"));
      // console.log(userLocal);
      const favorLocal = userLocal?.user.productsFavorite;
      localStorage.setItem("userFavor", JSON.stringify(favorLocal));
    } catch (err) {
      alert("login fail");
    }
  };
};
export const handleBlurName = (e, dispatch) => {
  const { value } = e.target;
  // console.log(value,value.length)
  if (value === "") {
    dispatch({
      type: SignInSignUpAction.VALIDATE_FORM,
      payload: {
        validUserName: { status: true, message: "Tên Không Được Trống" },
      },
    });
  } else if (+value.length > 8) {
    dispatch({
      type: SignInSignUpAction.VALIDATE_FORM,
      payload: {
        validUserName: {
          status: true,
          message: "khong duoc lon hon 8 ky tu",
        },
      },
    });
  } else {
    dispatch({
      type: SignInSignUpAction.VALIDATE_FORM,
      payload: {
        validUserName: { status: false, message: "" },
      },
    });
  }
};
export const handleBlurEmail = (e, dispatch) => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const { value } = e.target;
  // console.log(regex.test(value));

  if (value === "") {
    dispatch({
      type: SignInSignUpAction.VALIDATE_FORM,
      payload: {
        validEmail: {
          status: true,
          message: "Email Không Được Trống",
        },
      },
    });
  } else if (regex.test(value) === false) {
    dispatch({
      type: SignInSignUpAction.VALIDATE_FORM,
      payload: {
        validEmail: {
          status: true,
          message: "email khong dung dinh dang",
        },
      },
    });
  } else {
    dispatch({
      type: SignInSignUpAction.VALIDATE_FORM,
      payload: {
        validEmail: {
          status: false,
          massage: "",
        },
      },
    });
  }
};
export const handleBlurPassword = (e, dispatch) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const { value } = e.target;
  if (value === "") {
    dispatch({
      type: SignInSignUpAction.VALIDATE_FORM,
      payload: {
        validPassword: {
          status: true,
          message: "Password Không Được Để Trống",
        },
      },
    });
  } else if (regex.test(value) === false) {
    dispatch({
      type: SignInSignUpAction.VALIDATE_FORM,
      payload: {
        validPassword: {
          status: true,
          message: "Password Không Đúng Định Dạng ",
        },
      },
    });
  } else {
    dispatch({
      type: SignInSignUpAction.VALIDATE_FORM,
      payload: {
        validPassword: {
          status: false,
          message: "",
        },
      },
    });
  }
};
export const handleBlurAge = (e, dispatch) => {
  const regex = /^[0-9]*$/;
  const { value } = e.target;
  if (regex.test(value) === false || value === "") {
    // console.log("khong dung dinh dang");
    dispatch({
      type: SignInSignUpAction.VALIDATE_FORM,
      payload: {
        validAge: {
          status: true,
          massage: "Tuổi Không Đúng Định Dạng",
        },
      },
    });
  } else if (value < 18 || value > 100) {
    dispatch({
      type: SignInSignUpAction.VALIDATE_FORM,
      payload: {
        validAge: {
          status: true,
          massage: "Tuổi Không Hợp Lệ",
        },
      },
    });
  } else {
    dispatch({
      type: SignInSignUpAction.VALIDATE_FORM,
      payload: {
        validAge: {
          status: false,
          massage: "",
        },
      },
    });
  }
};
// can dung + de check truong hop so sanh voi number
// khong dc space va ky tu khong duoc lon hon 100 va khong be hon 18
