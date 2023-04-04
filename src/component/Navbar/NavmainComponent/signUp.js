import React from "react";
import styled from "styled-components";
import * as Action from "./module/actions/action";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import { SignInSignUpAction } from "./module/constants/constants";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const SignUp = () => {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.reducerSignUp.dataUser);
  const openSu = useSelector((state) => state.reducerSignUp.openSu);
  const validateForm = useSelector((state) => state.reducerSignUp.validateForm);
  const handleClose = () => {
    dispatch({ type: SignInSignUpAction.SIGNUP, payload: false });
  };
  return (
    <Modal
      open={openSu}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Register>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <div className="sign-up-main">
            <TextField
              className="sign-up-"
              margin="normal"
              fullWidth
              label="Name"
              name="Name"
              autoComplete="Name"
              autoFocus
              onChange={(e) => Action.handleChangeName(e, dispatch)}
              onBlur={(e) => Action.handleBlurName(e, dispatch)}
              inputProps={{ maxLength: 9 }}
            />
            {validateForm.validUserName.status === true && (
              <p className="sign-up-valid">
                {validateForm.validUserName.message}
              </p>
            )}
            <TextField
              className=""
              margin="normal"
              required
              fullWidth
              name="Email"
              label="Email"
              type="Email"
              autoComplete="Email"
              onChange={(e) => Action.handleChangeEmail(e, dispatch)}
              onBlur={(e) => Action.handleBlurEmail(e, dispatch)}
            />
            {validateForm.validEmail.status === true && (
              <p className="sign-up-valid">{validateForm.validEmail.message}</p>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="Password"
              label="Password"
              type="Password"
              autoComplete="Password"
              onChange={(e) => Action.handleChangePassword(e, dispatch)}
              onBlur={(e) => Action.handleBlurPassword(e, dispatch)}
            />
            {validateForm.validPassword.status === true && (
              <p className="sign-up-valid">
                {validateForm.validPassword.message}
              </p>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="Age"
              label="Age"
              autoComplete="Age"
              onChange={(e) => Action.handleChangeAge(e, dispatch)}
              onBlur={(e) => Action.handleBlurAge(e, dispatch)}             
              value={dataUser.age}
           />
            {validateForm.validAge.status === true && (
              <p className="sign-up-valid">{validateForm.validAge.message}</p>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => Action.createNewUser(dataUser)}
            >
              Register
            </Button>
          </div>
        </Box>
      </Register>
    </Modal>
  );
};

export default SignUp;
const Register = styled.div`
  .sign-up- {
    &main {
      width: 500px;
      box-shadow: 10px 10px 100px lightblue inset;
      border-radius: 5px;
    }
    /* &-input-group {
      width: 471;
      margin: 15px 0;
    }
    &input_type {
      width: "100%";
    } */
    &valid {
      font: 400 1.2em/1 "Oswald", sans-serif;
      color: black;
      letter-spacing: 0;
      padding: 0.25em 0 0.325em;
      display: block;
      margin: 0 auto;
      text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
      background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png) repeat-y;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: aitf 80s linear infinite;
      text-align: center;
      @keyframes aitf {
        0% {
          background-position: 0% 50%;
        }
        100% {
          background-position: 80% 50%;
        }
      }
    }
    &input {
      width: 100px;
    }
  }
`;
