export const userType = {
  loginType: "admin",
};

export const regularExpressions = {
  EMAIL_REGEX: /^[a-zA-Z0-9](.?)+@[a-zA-Z0-9]+.[A-Za-z]+$/,
  PHONE_REGEX:
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
  DECIMAL_REGEX: "^[1-9]{1,3}(,[0-9]{3})*(.[0-9]{1,2})?$",
};

export const TIME_OUT = 8000;

export const help = {
  PASSWORD_HELP:
    "Must Contain 8 or more characters, with a mix of uppercase, lowercase letters, numbers &symbols(!, @, #, $, %)",
  PASSWORD_MISMATCH: "These passwords didn’t match",
  INVALID_CONTACT_NUMBER: "Invalid contact number!",
  INVALID_EMAIL_ADDRESS: "Invalid email address!",
  TOO_SHORT: "Value is too short",
  VALUE_REQUIRED: "cannot be blank",
};

export const successMessages = {
  LOGGEDIN_SUCCEFULL: "logged in successfull",
  REGISTRATION_SUCCESSFULL: "User registered successfully",
  LOGGEDOUT_SUCCESSFULLY: "Logout successfully",
};

export const errorMessages = {
  YOU_CANT_DELETE_BY_YOU: "You cannot Delete your own account",
  WRONG_USER_ID_ENTERED: "user id entered wrongly!",
  WRONG_PASSWORD_ENTERED: "password entered wrongly!",
  THIS_USERID_ALREADY_EXIST: "User id already exist",
};

export const dataTimeOut = {
  BASIC: 100,
};

export const apiUrls = {
  BASEURL: "http://localhost:8000",
  AUTH: "/session",
  LOG_IN: "/login",
  LOG_OUT: "/logout",
  VERIFY_EMAIL: "/verify-email",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  REFRESH_ACESS_TOKEN: "/refresh-access-token",
  ADMIN: "/admin",
  SUBJECT: "/subject",
  LEVEL: "/level",
  ACTIVITY: "/activity",
  PLACEMENT_EXAM: "/placement-exam",
  PLACEMENT_QUESTION: "/placement-question",
  ACTIVITY_EXAM_QA: "/activity-exam-qa",
};

export const paths = {
  LOG_IN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  PROFILE: "/basic-profile",
};

export const pagination = {
  PAGE_LIMIT: 6,
  SEARCH_LIMIT: 50,
  OFFSET: 6,
  COUNT: 0,
};

export const pageOptions = [5, 10, 15, 20];

export const genderOption = [
  {
    label: "Not Selected",
    value: "",
  },
  {
    label: "Male",
    value: "1",
  },
  {
    label: "Female",
    value: "2",
  },
];

export const countryOptions = [
  {
    label: "Not Selected",
    value: "",
  },
  {
    label: "United States",
    value: "1",
  },
  {
    label: "Singapore",
    value: "2",
  },
  {
    label: "Canada",
    value: "3",
  },
];

export const salutations = [
  {
    label: "Not Selected",
    value: "",
  },
  {
    label: "Mr.",
    value: "1",
  },
  {
    label: "Ms",
    value: "2",
  },
];

export const BASEURL = "http://localhost:8000";
