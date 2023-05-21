import { instance } from "../config/config";
import { API } from "./path";



// AUTH

const CreateUser = (data) => {
  return instance.post(API.routes.createUser , data);
};

const LoginUser = (data) => {
  return instance.post(API.routes.loginUser, data);
};

// Layout

const GetChats = () => {
  return instance.get(API.routes.chat);
};




export const RequestsDB = {
  GetChats,
  CreateUser,
  LoginUser
}