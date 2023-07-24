import { Grid, Typography } from "@mui/material";
import AvatarImage from "src/assets/images/Avatar.svg";
import userData from "src/json/userData.json";

type Props = {};

function Details({}: Props) {
  return (
    <Grid container p={7}>
      <Grid item xs={2}>
        <img src={AvatarImage} alt="" />
      </Grid>
      <Grid item xs={10}>
        <Grid container rowSpacing={1} ml={10}>
          <Grid item xs={10}>
            <Typography variant="h5" component="h5" fontWeight="bold">
              Mobile Number*
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="body">
              {userData.mobileNumber}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" fontWeight="bold">
              Home Address*
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="body">
              {userData.address}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" fontWeight="bold">
              Postal Code
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="body">
              {userData.postalCode}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" fontWeight="bold">
              Nationality
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="body">
              {userData.nationality}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" fontWeight="bold">
              Date of birth
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="body">
              {userData.dob}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" fontWeight="bold">
              Gender
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="body">
              {userData.gender}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" fontWeight="bold">
              Maritial Status
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="body">
              {userData.maritialStatus}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Details;
