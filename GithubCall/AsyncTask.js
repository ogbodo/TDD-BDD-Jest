// import request from "../node_modules/request";
import request from "./request";
export function getUserName(userID) {
  return request("/users/" + userID).then(user => user.name);
}
