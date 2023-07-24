import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
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
import { help, regularExpressions } from "src/utils/properties";

// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   minWidth: "50%",
//   minHeight: 400,
//   marginTop: 5,
//   borderRadius: "8px",
//   boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.12)",
// };

type Props = {};

const Register = (props: Props) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");
  const [initialValues] = useState({
    userId: "",
    password: "",
  });

  const validationSchema = Yup.object({
    userId: Yup.string().required("user id " + help.VALUE_REQUIRED),
    password: Yup.string()
      .matches(regularExpressions.PASSWORD_REGEX, help.PASSWORD_HELP)
      .required("Password " + help.VALUE_REQUIRED),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], help.PASSWORD_MISMATCH)
      .required("Confirm password " + help.VALUE_REQUIRED),
  });

  const onSubmit = async (values) => {
    console.log("values", values);
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
                Register to <b>myApp</b>
              </Typography>
            </Grid>
            <Grid item xs={2} className="titleBottomBorder"></Grid>
          </Grid>
        </Grid>
        <Grid item xs={4.5}></Grid>
        <Grid item xs={6}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form id="PasswordVerification">
                <Grid container rowSpacing={1} columnSpacing={1}>
                  <Grid item xs={12} sx={{ mb: 1, mt: 2 }}>
                    <Stack sx={{ width: "100%" }}>
                      {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={3} className="loginInputLabel">
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
                      <Grid item xs={3} className="loginInputLabel">
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
                      <Grid item xs={3} className="loginInputLabel">
                        Confirm Password*
                      </Grid>
                      <Grid item xs={6}>
                        <FormikControl
                          control="input"
                          type="password"
                          name="confirmPassword"
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
                      <Grid item xs={3}></Grid>
                      <Grid item xs={6}>
                        <FormControlLabel
                          control={
                            <Checkbox value="remember" color="primary" />
                          }
                          label="Remember me"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={3}></Grid>
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
                          Register
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={1}></Grid>
                      <Grid item sx={{ mt: "12px" }}>
                        <Typography>
                          Already have an account?{" "}
                          <Link href="login" variant="body2" color="#000000">
                            Sign In here.
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
    </Box>
  );
};

export default Register;
