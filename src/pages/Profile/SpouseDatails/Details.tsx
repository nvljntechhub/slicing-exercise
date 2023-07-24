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
              Salutation
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="body">
              {userData.spouseDetails.salutation}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" fontWeight="bold">
              First Name
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="body">
              {userData.spouseDetails.firstName}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" fontWeight="bold">
              Last Name
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="body">
              {userData.spouseDetails.lastName}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Details;
