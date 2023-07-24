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
              Hobbies and interests
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="body">
              {userData.hobiesAndInterests}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" fontWeight="bold">
              Favorite sport
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="body">
              {userData.favouriteSport}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" fontWeight="bold">
              Preferred music genres
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="body">
              {userData.preferredMusicGenres}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" fontWeight="bold">
              Preferred movie/TV shows
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="body">
              {userData.preferredMovieTVShows}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Details;
