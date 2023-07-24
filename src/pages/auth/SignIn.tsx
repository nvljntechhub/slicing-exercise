import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Logo from "src/assets/images/logo.png";
import * as Yup from "yup";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import FormikControl from "src/components/InputControls/FormikControl";
import { Form, Formik } from "formik";
import "src/css/login.css";
import {
  errorMessages,
  help,
  paths,
  successMessages,
} from "src/utils/properties";
import { authMatching } from "src/utils/authFunction.utils";
import { useCookies } from "react-cookie";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

type Props = {};

const SignIn = (props: Props) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["userId", "password"]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isRememberChecked, setIsRememberChecked] = useState(false);
  const [initialValues] = useState({
    userId: "",
    password: "",
  });

  const validationSchema = Yup.object({
    userId: Yup.string().required("user id " + help.VALUE_REQUIRED),
    password: Yup.string().required("password " + help.VALUE_REQUIRED),
  });

  const onSubmit = async (values: any) => {
    const credentialAuthentication = authMatching(
      values.userId,
      values.password
    );

    if (
      credentialAuthentication.userIdCheck &&
      credentialAuthentication.passwordCheck
    ) {
      enqueueSnackbar(successMessages.LOGGEDIN_SUCCEFULL, {
        variant: "success",
      });
      if (isRememberChecked) {
        let expires = new Date();
        expires.setTime(expires.getTime() + 365 * 24 * 60 * 60 * 1000);
        setCookie("userId", values.userId, {
          path: "/",
          expires,
        });
        const hashedPassword = bcrypt.hashSync(values.password, salt);
        setCookie("password", hashedPassword, {
          path: "/",
          expires,
        });
      }
      navigate(paths.DASHBOARD);
    } else if (!credentialAuthentication.userIdCheck) {
      setErrorMsg(errorMessages.WRONG_USER_ID_ENTERED);
    } else if (!credentialAuthentication.passwordCheck) {
      setErrorMsg(errorMessages.WRONG_PASSWORD_ENTERED);
    }
  };
  return (
    <Box className="loginContainer">
      <Grid container>
        <Grid item xs={12}>
          <Avatar
            src={Logo}
            className="logo"
            sx={{ width: "100px", height: "100px" }}
            variant="circular"
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container textAlign="center" justifyContent="center">
            <Grid item xs={12}>
              <Typography fontSize="100px">
                Welcome to <b>myApp</b>
              </Typography>
            </Grid>
            <Grid item xs={2} className="titleBottomBorder"></Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={6} sx={{ mt: "12px" }}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form id="PasswordVerification">
                <Grid container rowSpacing={1} columnSpacing={1}>
                  <Grid item xs={12} sx={{ mb: 1, mt: 2 }}>
                    <Stack sx={{ width: "100%", ml: "30px" }}>
                      {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={2} className="loginInputLabel">
                        User ID*
                      </Grid>
                      <Grid item xs={6} className="loginInput">
                        <FormikControl
                          control="input"
                          type="text"
                          name="userId"
                          fullWidth
                          InputProps={{
                            style: {
                              borderRadius: 0,
                              color: "#000000",
                              backgroundColor: "#ffffff",
                            },
                          }}
                          component={Paper}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={2} className="loginInputLabel">
                        Password*
                      </Grid>
                      <Grid item xs={6}>
                        <FormikControl
                          control="input"
                          type="password"
                          name="password"
                          fullWidth
                          InputProps={{
                            style: {
                              borderRadius: 0,
                            },
                          }}
                          component={Paper}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={2}></Grid>
                      <Grid item xs={6}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="remember"
                              color="primary"
                              onChange={() => {
                                setIsRememberChecked(!isRememberChecked);
                              }}
                            />
                          }
                          label="Keep me logged in"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={2}></Grid>
                      <Grid item xs={6}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{
                            borderRadius: "0px",
                            width: "50%",
                          }}
                        >
                          Sign In
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={1}></Grid>
                      <Grid item sx={{ mt: "12px" }}>
                        <Typography>
                          No account?{" "}
                          <Link href="register" variant="body2" color="#000000">
                            Register here.
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
      <Container></Container>
    </Box>
  );
};

export default SignIn;
