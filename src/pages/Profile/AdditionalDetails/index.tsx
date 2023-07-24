import { ArrowBackTwoTone, EditTwoTone } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import Details from "./Details";
import { useLocation } from "react-router-dom";
import { Action, ProfileType } from "src/enums";
import { NavLink } from "react-router-dom";
import { paths } from "src/utils/properties";
import Update from "./Update";

type Props = {};

function AdditionalDetailsManagement({}: Props) {
  const location = useLocation();
  const search = location.search;
  const action = new URLSearchParams(search).get("action");

  return (
    <Grid container>
      <Grid item xs={6} className="profileHeader">
        Additional <b>Details</b>
      </Grid>
      <Grid item xs={4}>
        <div className="titleBottomBorder"></div>
      </Grid>
      <Grid item xs={1} mt="70px" ml="20px">
        {Number(action) === Action.DETAILS ? (
          <IconButton
            component={NavLink}
            to={`${paths.PROFILE}?profileType=${ProfileType.ADDITIONAL}&action=${Action.UPDATE}`}
          >
            <Typography> Edit Profile </Typography>
            <EditTwoTone />
          </IconButton>
        ) : (
          <IconButton
            component={NavLink}
            to={`${paths.PROFILE}?profileType=${ProfileType.ADDITIONAL}&action=${Action.DETAILS}`}
          >
            <ArrowBackTwoTone />
            <Typography> Back </Typography>
          </IconButton>
        )}
      </Grid>
      <Grid item xs={12}>
        {Number(action) === Action.DETAILS && <Details />}
        {Number(action) === Action.UPDATE && <Update />}
      </Grid>
    </Grid>
  );
}

export default AdditionalDetailsManagement;
