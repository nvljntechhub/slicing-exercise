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
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "src/assets/images/logo.png";
import "src/css/homepage.css";
import { useEffect, useState } from "react";
import { genderOption, pagination } from "src/utils/properties";
import clientData from "src/json/membersData.json";
import { Client } from "src/interface/Clients";
import ContactProfile from "src/assets/images/Avatar.svg";
import HeaderUserbox from "src/pages/UserBox";
import { Cookies } from "react-cookie";

type Props = {};

function Homepage({}: Props) {
  const [clients, setClients] = useState<Client[]>();
  const [selectedGender, setSelectedGender] = useState(genderOption[0].label);
  const [selectedGenderValue, setSelectedGenderValue] = useState(
    genderOption[0].value
  );
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
    const cookies = new Cookies();
    const userId = cookies.get("userId");
    const password = cookies.get("password");

    getCountryDropdownOptions();
    list(page, limit, selectedGender, selectedCountry?.label);
  }, []);

  const list = (
    page: number,
    limit: number,
    gender: string,
    country: string
  ) => {
    let filteredList = clientData;

    if (gender !== "Not Selected") {
      filteredList = filteredList.filter((item) => item.gender === gender);
    }

    if (country !== "Not Selected") {
      filteredList = filteredList.filter((item) => item.country === country);
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = filteredList.slice(startIndex, endIndex);
    const newCount = Math.floor(filteredList.length / limit);
    setClients(paginatedData);
    setCount(newCount);
  };

  const onGenderSelect = (event: SelectChangeEvent, value: any) => {
    setSelectedGenderValue(event.target.value);
    setSelectedGender(value.props.children);
    list(page, limit, value.props.children, selectedCountry?.label);
  };

  const getCountryDropdownOptions = () => {
    const countryOptionsData: any = [];
    countryOptionsData.push({
      label: "Not Selected",
      key: "",
    });

    clientData.forEach((data) => {
      countryOptionsData.push({ label: data.country, key: data.id });
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
    list(newPage, limit, selectedGender, selectedCountry?.label);
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
          <HeaderUserbox />
          {/* <MenuTwoTone sx={{ fontSize: "70px" }} /> */}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4} className="dashboardHeader">
          My <b>Contacts</b>
        </Grid>
        <Grid item xs={8}>
          <div className="titleBottomBorder"></div>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="flex-end"
            sx={{ pr: 10 }}
            columnSpacing={2}
          >
            <Grid item minWidth="250px">
              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  onChange={onGenderSelect}
                  className="input-field"
                  value={selectedGenderValue}
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
          <Grid item xs={12}>
            <Grid container component={Paper} minHeight="50vh" marginTop={2}>
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
                            <Grid item xs={12}>
                              <Typography
                                sx={{ fontSize: 30 }}
                                color="text.secondary"
                                gutterBottom
                              >
                                {client.firstName + " " + client.lastName}
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Link
                                sx={{ cursor: "pointer", fontSize: "20px" }}
                              >
                                {client?.email}
                              </Link>
                            </Grid>
                            <Grid item xs={12}>
                              <Link
                                sx={{ fontSize: "20px", cursor: "pointer" }}
                              >
                                {client?.phoneNo}
                              </Link>
                            </Grid>
                            <Grid item xs={12}>
                              {client?.address}
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Grid container justifyContent="center" padding={5}>
              <Grid item>
                <Pagination
                  count={count}
                  onChange={handlePageChange}
                  variant="outlined"
                />
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
