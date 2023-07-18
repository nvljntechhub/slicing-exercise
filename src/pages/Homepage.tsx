import {
  Autocomplete,
  Avatar,
  Box,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "../assets/images/log.png";
import "../css/homepage.css";
import { MenuTwoTone } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { genderOption, pagination } from "../utils/properties";
import clientData from "../json/membersData.json";
import { Client, Gender } from "../interface/Clients";
import ContactProfile from "../assets/images/Avatar.svg";

type Props = {};

function Homepage({}: Props) {
  const [clients, setClients] = useState<Client[]>();
  const [selectedGender, setSelectedGender] = useState(genderOption[0].value);
  const [countryOptions, setCountryOptions] = useState<
    { label: string; key: string }[]
  >([]);
  const [selectedCountry, setSelectedCountry] = useState({
    label: "Not Selected",
    key: "",
  });
  const [page, setPage] = useState<number>(pagination.OFFSET);
  const [limit, setLimit] = useState<number>(pagination.PAGE_LIMIT);
  const [count, setCount] = useState<number>(pagination.COUNT);

  useEffect(() => {
    getCountryDropdownOptions();
    list(page, limit, selectedGender, selectedCountry.label);
  }, []);

  const list = (
    page: number,
    limit: number,
    gender: string,
    country: string
  ) => {
    console.log("clientData", clientData);
    console.log("identify", gender, country);

    if (!gender || country === "Not Selected") {
      // Calculate start and end indices
      const startIndex = (page - 1) * limit;
      console.log("startIndex", startIndex);

      const endIndex = startIndex + limit;

      // Get paginated data
      const paginatedData = clientData.slice(startIndex, endIndex);
      const newCount = Math.floor(clientData.length / pagination.PAGE_LIMIT);
      console.log("data", paginatedData);

      setClients(paginatedData);
      setCount(newCount);
    } else {
      const filteredList = clientData.filter(
        (item) => item.country === country && item.gender === gender
      );
      setClients(filteredList);
    }

    // setClients([filteredList]);
  };

  const onGenderSelect = (event: SelectChangeEvent, value: any) => {
    setSelectedGender(value.props.children);
    list(page, limit, value.props.children, selectedCountry?.label);
  };

  const getCountryDropdownOptions = () => {
    const countryOptionsData: any = [];
    countryOptionsData.push({
      label: "Not Selected",
      key: "",
    });

    clientData.map((data) => {
      countryOptionsData.push({ label: data?.country, key: data?.id });
    });

    const uniqueLabels = new Set(
      countryOptionsData.map((item: any) => item.label)
    );
    const uniqueCountryOptionsData = Array.from(uniqueLabels, (label) =>
      countryOptionsData.find((item: any) => item.label === label)
    );
    setSelectedCountry(uniqueCountryOptionsData[0]);
    setCountryOptions(uniqueCountryOptionsData);
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
    list(newPage, limit, selectedGender, selectedCountry.label);
  };

  return (
    <Box className="homepageContainer">
      <Grid container justifyContent="space-between">
        <Grid item xs={11}>
          <Avatar
            src={Logo}
            className="logo"
            sx={{ width: "100px", height: "100px" }}
            variant="circular"
          />
        </Grid>
        <Grid item xs={1} mt={5}>
          <MenuTwoTone sx={{ fontSize: "70px" }} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item className="dashboardHeader">
          My <b>Contacts</b>
        </Grid>
        <Grid item className="titleBottomBorder"></Grid>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="flex-end"
            sx={{ pr: 10, pt: 5 }}
            columnSpacing={2}
          >
            <Grid item minWidth="250px">
              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  onChange={onGenderSelect}
                  className="input-field"
                  value={selectedGender}
                >
                  {genderOption.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item minWidth={250}>
              <Autocomplete
                disablePortal
                disableClearable
                options={countryOptions}
                value={selectedCountry}
                isOptionEqualToValue={(option, value) =>
                  option.key === value.key
                }
                onChange={(event, value) => {
                  setSelectedCountry(value);
                  list(page, limit, selectedGender, value.label);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Country" />
                )}
              />
            </Grid>
          </Grid>
          <Grid xs={12}>
            <Grid container>
              {clients?.map((client) => (
                <Grid item xs={4} padding={2}>
                  <Card>
                    <CardContent>
                      <Grid container>
                        <Grid item xs={4}>
                          <img src={ContactProfile} alt="" />
                        </Grid>
                        <Grid item xs={8}>
                          <Grid container rowGap={1}>
                            <Grid xs={12}>
                              <Typography
                                sx={{ fontSize: 30 }}
                                color="text.secondary"
                                gutterBottom
                              >
                                {client.firstName + " " + client.lastName}
                              </Typography>
                            </Grid>
                            <Grid xs={12}>
                              <Link
                                sx={{ cursor: "pointer", fontSize: "20px" }}
                              >
                                {client?.email}
                              </Link>
                            </Grid>
                            <Grid xs={12}>
                              <Link
                                sx={{ fontSize: "20px", cursor: "pointer" }}
                              >
                                {client?.phoneNo}
                              </Link>
                            </Grid>
                            <Grid xs={12}>{client?.address}</Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Grid container justifyContent="center">
              <Grid item>
                <Pagination
                  count={count}
                  onChange={handlePageChange}
                  variant="outlined"
                />
                <Grid item></Grid>
              </Grid>

              {/* <TablePagination
                component="div"
                count={count}
                page={page}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                rowsPerPage={limit}
                rowsPerPageOptions={pageOptions}
              /> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Homepage;
