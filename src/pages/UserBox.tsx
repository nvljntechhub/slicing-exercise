import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Divider,
  lighten,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import LockOpenTwoToneIcon from "@mui/icons-material/LockOpenTwoTone";
import { useSnackbar } from "notistack";
import { HomeMaxTwoTone, MenuTwoTone } from "@mui/icons-material";
import { paths, successMessages } from "src/utils/properties";
import { Action, ProfileType } from "src/enums";

const UserBoxButton = styled(Button)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
        background:'#ffffff';
        padding: ${theme.spacing(2)};
`
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: '#0000000';
        display: block;
`
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
        color: ${lighten(theme.palette.secondary.main, 0.5)}
`
);

function HeaderUserbox() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  // const [loggedInUser, setLoggedInUser] = useState<LoggedInUser>(
  //   JSON.parse(localStorage.getItem("loggedInUser"))
  // );

  // useEffect(() => {
  //   setLoggedInUser(JSON.parse(localStorage.getItem("loggedInAdmin")));
  // }, []);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleLogOut = () => {
    enqueueSnackbar(successMessages.LOGGEDOUT_SUCCESSFULLY, {
      variant: "success",
    });
    navigate("/login");
  };

  return (
    <>
      <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
        <MenuTwoTone sx={{ fontSize: "70px" }} />
      </UserBoxButton>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuUserBox sx={{ minWidth: 210 }} display="flex">
          <Avatar sx={{ color: "InfoText", backgroundColor: "violet" }}>
            {/* {loggedInUser?.firstName.charAt(0)} */}
          </Avatar>
          <UserBoxText>
            <UserBoxLabel variant="body1">
              {/* {loggedInUser?.firstName} {loggedInUser?.lastName} */}
            </UserBoxLabel>
            <UserBoxDescription variant="body2">
              {/* {loggedInUser?.email} */}
            </UserBoxDescription>
          </UserBoxText>
        </MenuUserBox>
        <Divider sx={{ mb: 0 }} />
        <List sx={{ p: 1 }} component="nav">
          <ListItem
            button
            to={`${paths.PROFILE}?profileType=${ProfileType.BASIC}&action=${Action.DETAILS}`}
            component={NavLink}
            onClick={handleClose}
          >
            <AccountBoxTwoToneIcon fontSize="small" />
            <ListItemText primary="My Profile" />
          </ListItem>
        </List>
        <Divider />
        <Box sx={{ m: 1 }}>
          <Button
            color="primary"
            fullWidth
            to={paths.DASHBOARD}
            component={NavLink}
          >
            <HomeMaxTwoTone sx={{ mr: 1 }} />
            Homepage
          </Button>
        </Box>
        <Divider />
        <Box sx={{ m: 1 }}>
          <Button color="primary" fullWidth onClick={handleLogOut}>
            <LockOpenTwoToneIcon sx={{ mr: 1 }} />
            Log out
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderUserbox;
