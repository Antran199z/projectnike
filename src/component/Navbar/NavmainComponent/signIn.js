import react from "react";
import styled from "styled-components";
import * as React from "react";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { SignInSignUpAction } from "./module/constants/constants";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const SignIn = (props) => {
  const dispatch = useDispatch();
  const { open, handleClose } = props;
  const userLocal = useSelector((state) => state.reducerSignUp.user);
  const handleOpenSu = () => {
    handleClose();
    dispatch({ type: SignInSignUpAction.SIGNUP, payload: true });
  };
  const handleLogout = () => {
    dispatch({ type: SignInSignUpAction.LOGOUT, payload: "" });
  };
  return (
    <div>
      {userLocal ? (
        <div>
          hello {userLocal.user.name}
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledSignInComponent >
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <div className="sign-in-main">
                <TextField
                  margin="normal"
                  fullWidth
                  label="Name"
                  name="Name"
                  autoComplete="Name"
                  autoFocus
                />
                <TextField className=""
                  margin="normal"
                  required
                  fullWidth
                  name="Email"
                  label="Email"
                  type="Email"
                  autoComplete="Email"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </div>
              <p onClick={handleOpenSu}>
                Not a numer?
                <b>Join Us</b>
              </p>
            </Box>
          </StyledSignInComponent>
        </Modal>
      )}
    </div>
  );
};

export default SignIn;
const StyledSignInComponent = styled.div`
  .sign-in- {
    &main {
      width:500px;
      box-shadow: 10px 10px 100px lightblue inset;
      border-radius: 5px;
    }
    &-input-group {
      width: 471;
      margin: 15px 0;
    }
    &input_type {
      width: "100%";
    }
    &input_button {
      width: 100px;
    }
  }
`;
