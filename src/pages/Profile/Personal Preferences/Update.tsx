import { Alert, Button, Grid, Stack } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import AvatarImage from "src/assets/images/Avatar.svg";
import FormikControl from "src/components/InputControls/FormikControl";
import userData from "src/json/userData.json";

type Props = {};

function Update({}: Props) {
  const [selectedSalutation, setSelectedSalutation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [initialValues] = useState({
    hobiesAndInterests: userData.hobiesAndInterests,
    favouriteSport: userData.favouriteSport,
    preferredMusicGenres: userData.preferredMusicGenres,
    preferredMovieTVShows: userData.preferredMovieTVShows,
  });

  // const validationSchema = Yup.object({
  //   hobiesAndInterests: Yup.string().required(
  //     "Hobbies and Interests" + help.VALUE_REQUIRED
  //   ),
  //   address: Yup.string().required("Address " + help.VALUE_REQUIRED),
  //   postalCode: Yup.string().required("Postal Code " + help.VALUE_REQUIRED),
  //   nationality: Yup.string().required("Nationality " + help.VALUE_REQUIRED),
  //   gender: Yup.string().required("Gender " + help.VALUE_REQUIRED),
  //   maritialStatus: Yup.string().required(
  //     "Maritail Status " + help.VALUE_REQUIRED
  //   ),
  // });

  const onSubmit = (values) => {};

  return (
    <Grid container p={7}>
      <Grid item xs={2}>
        <img src={AvatarImage} alt="" />
      </Grid>
      <Grid item xs={10}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(formik) => (
            <Form id="detailsPage">
              <Grid container rowSpacing={1}>
                <Grid item xs={12}>
                  <Stack sx={{ width: "100%", ml: "30px" }}>
                    {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
                  </Stack>
                </Grid>
                <Grid item xs={12} className="loginInput">
                  <FormikControl
                    control="input"
                    type="text"
                    label="Hobbies and Interests"
                    placeholder="Add Text"
                    name="hobiesAndInterests"
                    multiline={true}
                    rows={3}
                  />
                </Grid>
                <Grid item xs={12} className="loginInput">
                  <FormikControl
                    control="input"
                    type="text"
                    placeholder="Add Text"
                    label={"Favorite sport"}
                    name="favouriteSport"
                    multiline={true}
                    rows={3}
                  />
                </Grid>
                <Grid item xs={12} className="loginInput">
                  <FormikControl
                    control="input"
                    type="text"
                    placeholder="Add Text"
                    label="Preferred music genres"
                    name="preferredMusicGenres"
                    multiline={true}
                    rows={3}
                  />
                </Grid>
                <Grid item xs={12} className="loginInput">
                  <FormikControl
                    control="input"
                    type="text"
                    placeholder="Add Text"
                    label="Preferred movie/TV shows"
                    name="preferredMovieTVShows"
                    multiline={true}
                    rows={3}
                  />
                </Grid>
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
