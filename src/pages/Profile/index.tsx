import {
  Grid,
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Logo from "src/assets/images/logo.png";
import HeaderUserbox from "src/pages/UserBox";
import "src/css/profile.css";
import { useState } from "react";
import BasicDetailsManagement from "./BasicDetails";
import { NavLink, useLocation } from "react-router-dom";
import { Action, ProfileType } from "src/enums";
import { paths } from "src/utils/properties";
import AdditionalDetailsManagement from "./AdditionalDetails";
import SpouseDetailsManagement from "./SpouseDatails";
import PersonalPreferencesManagement from "./Personal Preferences";
import userData from "src/json/userData.json";

function ProfileManagement() {
  const [selectedProfileType, setSelectedProfileType] = useState(1);
  const location = useLocation();
  const search = location.search;
  const profileType = new URLSearchParams(search).get("profileType");

  const handleListItemClick = (profileType: number) => {
    setSelectedProfileType(profileType);
  };
  return (
    <Box className="profileContainer">
      <Grid container>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between">
            <Grid item xs={11}>
              <Avatar
                src={Logo}
                className="logo"
                sx={{ width: "100px", height: "100px" }}
                variant="circular"
              />
            </Grid>
            <Grid item xs={1}>
              <HeaderUserbox />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} padding={2}>
          <Grid container>
            <Grid item xs={2}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  marginTop: "100px",
                }}
              >
                <nav>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton
                        selected={selectedProfileType === 1}
                        onClick={() => handleListItemClick(ProfileType.BASIC)}
                        component={NavLink}
                        to={`${paths.PROFILE}?profileType=${ProfileType.BASIC}&action=${Action.DETAILS}`}
                      >
                        <ListItemText primary="Basic Details" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
                <Divider />
                <nav>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton
                        selected={selectedProfileType === 2}
                        onClick={() =>
                          handleListItemClick(ProfileType.ADDITIONAL)
                        }
                        component={NavLink}
                        to={`${paths.PROFILE}?profileType=${ProfileType.ADDITIONAL}&action=${Action.DETAILS}`}
                      >
                        <ListItemText primary="Additional Details" />
                      </ListItemButton>
                    </ListItem>
                    {userData.maritialStatus === "Maried" && (
                      <ListItem disablePadding>
                        <ListItemButton
                          selected={selectedProfileType === ProfileType.SPOUSE}
                          onClick={() =>
                            handleListItemClick(ProfileType.SPOUSE)
                          }
                          component={NavLink}
                          to={`${paths.PROFILE}?profileType=${ProfileType.SPOUSE}&action=${Action.DETAILS}`}
                        >
                          <ListItemText primary="Spouse Details" />
                        </ListItemButton>
                      </ListItem>
                    )}

                    <ListItem disablePadding>
                      <ListItemButton
                        selected={selectedProfileType === ProfileType.PERSONAL}
                        onClick={() =>
                          handleListItemClick(ProfileType.PERSONAL)
                        }
                        component={NavLink}
                        to={`${paths.PROFILE}?profileType=${ProfileType.PERSONAL}&action=${Action.DETAILS}`}
                      >
                        <ListItemText primary="Personal Preferences" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
              </Box>
            </Grid>
            <Grid item xs={10}>
              {Number(profileType) === ProfileType.BASIC && (
                <BasicDetailsManagement />
              )}
              {Number(profileType) === ProfileType.ADDITIONAL && (
                <AdditionalDetailsManagement />
              )}
              {Number(profileType) === ProfileType.SPOUSE && (
                <SpouseDetailsManagement />
              )}
              {Number(profileType) === ProfileType.PERSONAL && (
                <PersonalPreferencesManagement />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfileManagement;
