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

export const modules = {
  SUBJECT: "Subject",
  LEVEL: "Level",
  ACTIVITY: "Activity",
  HOME_WORK: "Home work",
  LERNING_RESOURCES: "Learning resources",
  PLACEMENT_QUESTION: "Placement Question",
  ANSWER: "Answer",
  ACTIVITY_EXAM: "Activity Exam",
};

export const help = {
  PASSWORD_HELP:
    "Must Contain 8 or more characters, with a mix of uppercase, lowercase letters, numbers &symbols(!, @, #, $, %)",
  PASSWORD_MISMATCH: "These passwords didn’t match",
  INVALID_CONTACT_NUMBER: "Invalid contact number!",
  INVALID_EMAIL_ADDRESS: "Invalid email address!",
  TOO_SHORT: "Value is too short",
  VALUE_REQUIRED: "cannot be blank",
  ENTER_EMAIL: "Please enter the email address",
  CHECK_YOUR_EMAIL: "Summary Sent to an email. Please check your email!",
  MCQ_ANSWER_NOT_CHECKED: "One answer should be selected!",
  CHECKBOX_ANSWER_NOT_CHECKED: "Select Atleast two correct answer!",
  QUESTION_TITLE_REQUIRED: "Question title cannot be blank!",
  ANSWER_TITLE_REQUIRED: "Answer title cannot be blank!",
  FOUR_ANSWERS_REQUIRED: "Need at least 4 answers",
  FILE_FORMAT_UNSUPPORTED: "Unsupported  Format!",
  FILE_SIZE_BIG: "File Size is too large!",
  SUBJECT_SELECTION_REQUIRED: "Subject must be selected!",
  ACTIVITY_SELECTION_REQUIRED: "Activity must be selected!",
};

export const successMessages = {
  LOGGEDIN_SUCCEFULL: "logged in successfull",
};

export const errorMessages = {
  YOU_CANT_DELETE_BY_YOU: "You cannot Delete your own account",
  WRONG_USER_ID_ENTERED: "user id entered wrongly!",
  WRONG_PASSWORD_ENTERED: "password entered wrongly!",
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
  QUESTIONS: "/questions",
  ACITIVITY_EXAM: "/activity-exam",
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

export const BASEURL = "http://localhost:8000";
