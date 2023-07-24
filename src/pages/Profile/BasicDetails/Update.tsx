import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { ErrorMessage, Form, Formik } from "formik";
import { useState } from "react";
import AvatarImage from "src/assets/images/Avatar.svg";
import FormikControl from "src/components/InputControls/FormikControl";
import TextError from "src/components/InputControls/TextError";
import { help, salutations } from "src/utils/properties";
import * as Yup from "yup";
import userData from "src/json/userData.json";

type Props = {};

function Update({}: Props) {
  const [selectedSalutation, setSelectedSalutation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [initialValues] = useState({
    salutation: userData.salutation,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
  });

  const validationSchema = Yup.object({
    salutation: Yup.string().required("Salutation" + help.VALUE_REQUIRED),
    firstName: Yup.string().required("First Name " + help.VALUE_REQUIRED),
    lastName: Yup.string().required("Last Name " + help.VALUE_REQUIRED),
    email: Yup.string().required("Email " + help.VALUE_REQUIRED),
  });

  const onSubmit = (values) => {};

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form id="detailsPage">
            <Grid container rowSpacing={1} columnSpacing={4}>
              <Grid item xs={12}>
                <Stack sx={{ width: "100%", ml: "30px" }}>
                  {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
                </Stack>
              </Grid>
              <Grid item xs={2}>
                <img src={AvatarImage} alt="" />
                <FormikControl
                  control="input"
                  type="file"
                  name="profileImage"
                  fullWidth
                />
                <Typography textAlign="center">
                  (JPG or PNG format with maximum size of 1 MB)
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Grid item xs={4}>
                  <InputLabel className="inputLabel">Salutation*</InputLabel>
                  <FormControl fullWidth>
                    <Select
                      onChange={(event: SelectChangeEvent, value: any) => {
                        setSelectedSalutation(event.target.value);
                        formik.setFieldValue(
                          "salutation",
                          value.props.children
                        );
                      }}
                      name="salutation"
                      className="input-field"
                      value={selectedSalutation}
                    >
                      {salutations.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <ErrorMessage name="salutation" component={TextError} />
                </Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={4} className="loginInput">
                  <FormikControl
                    control="input"
                    type="text"
                    label="First Name*"
                    name="firstName"
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
                    label="Last Name*"
                    name="lastName"
                    fullWidth
                    InputProps={{
                      style: {
                        borderRadius: 0,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={8}></Grid>
                <Grid item xs={4}>
                  <FormikControl
                    control="input"
                    type="text"
                    label="Email*"
                    name="email"
                    fullWidth
                    InputProps={{
                      style: {
                        borderRadius: 0,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <Grid container columnGap={0} mt={4}>
                    <Grid item xs={6}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                          borderRadius: "0px",
                          width: "60%",
                        }}
                      >
                        Save & Exit
                      </Button>
                    </Grid>
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
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Update;
