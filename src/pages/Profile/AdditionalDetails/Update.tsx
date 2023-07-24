import { Alert, Button, Grid, Stack } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import AvatarImage from "src/assets/images/Avatar.svg";
import FormikControl from "src/components/InputControls/FormikControl";
import { help } from "src/utils/properties";
import * as Yup from "yup";
import userData from "src/json/userData.json";

type Props = {};

function Update({}: Props) {
  const [selectedSalutation, setSelectedSalutation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [initialValues] = useState({
    mobileNumber: userData.mobileNumber,
    address: userData.address,
    postalCode: userData.postalCode,
    nationality: userData.nationality,
    dob: userData.dob,
    gender: userData.gender,
    maritialStatus: userData.maritialStatus,
  });

  const validationSchema = Yup.object({
    mobileNumber: Yup.string().required("Mobile Number" + help.VALUE_REQUIRED),
    address: Yup.string().required("Address " + help.VALUE_REQUIRED),
    postalCode: Yup.string().required("Postal Code " + help.VALUE_REQUIRED),
    nationality: Yup.string().required("Nationality " + help.VALUE_REQUIRED),
    dob: Yup.string().required("Date of birth " + help.VALUE_REQUIRED),
    gender: Yup.string().required("Gender " + help.VALUE_REQUIRED),
    maritialStatus: Yup.string().required(
      "Maritail Status " + help.VALUE_REQUIRED
    ),
  });

  const onSubmit = (values) => {};

  return (
    <Grid container p={7}>
      <Grid item xs={2}>
        <img src={AvatarImage} alt="" />
      </Grid>
      <Grid item xs={10}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form id="detailsPage">
              <Grid container rowSpacing={1}>
                <Grid item xs={12}>
                  <Stack sx={{ width: "100%", ml: "30px" }}>
                    {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
                  </Stack>
                </Grid>
                <Grid item xs={4} className="loginInput">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Mobile Number*"
                    name="mobileNumber"
                    fullWidth
                    InputProps={{
                      style: {
                        borderRadius: 0,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={4} className="loginInput">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Home Address*"
                    name="address"
                    fullWidth
                    InputProps={{
                      style: {
                        borderRadius: 0,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={4} className="loginInput">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Postal Code*"
                    name="postalCode"
                    fullWidth
                    InputProps={{
                      style: {
                        borderRadius: 0,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={4} className="loginInput">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Nationality*"
                    name="nationality"
                    fullWidth
                    InputProps={{
                      style: {
                        borderRadius: 0,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={4} className="loginInput">
                  <FormikControl
                    control="input"
                    type="date"
                    label="Date of birth*"
                    name="dob"
                    fullWidth
                    InputProps={{
                      style: {
                        borderRadius: 0,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={4} className="loginInput">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Gender*"
                    name="gender"
                    fullWidth
                    InputProps={{
                      style: {
                        borderRadius: 0,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={4} className="loginInput">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Maritial Status*"
                    name="maritialStatus"
                    fullWidth
                    InputProps={{
                      style: {
                        borderRadius: 0,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6} mt={4}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          borderRadius: "0px",
                          width: "50%",
                        }}
                      >
                        Save & Exit
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          borderRadius: "0px",
                          width: "50%",
                        }}
                      >
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}

export default Update;
