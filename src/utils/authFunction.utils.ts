import { Admin } from "src/interface/Admin";
import userData from "src/json/userData.json";

export function authMatching(userId: string, password: string) {
  let userIdCheck: boolean = userData.userId === userId;
  let passwordCheck: boolean = userData.password === password;

  return { userIdCheck, passwordCheck };
}

// export function userRegistration(data: Admin) {
//   let responseMessage: string;
//   const isUserExist = userData.find((user) => user.userId === data.userId);

//   if (!isUserExist) {
//     userData.push(data);
//     responseMessage = successMessages.REGISTRATION_SUCCESSFULL;
//   } else {
//     responseMessage = errorMessages.THIS_USERID_ALREADY_EXIST;
//   }

//   return responseMessage;
// }
