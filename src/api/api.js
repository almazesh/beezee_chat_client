import { instance } from "../config/config";
import { API } from "./path";



// AUTH

const CreateUser = (data) => {
  return instance.post(API.routes.createUser , data);
};

const LoginUser = (data) => {
  return instance.post(API.routes.loginUser, data);
};

const AuthUser = () => {
  return instance.get(API.routes.authUser);
};

const SearchUser = (name) => {
  return instance.get(API.routes.searchUser(name));
};

// Layout

const GetChats = () => {
  return instance.get(API.routes.chat);
};

const CreateChat = (userId) => {
  return instance.post(API.routes.createChat, { userId });
};

const CreateGroup = (data) => {
  return instance.post(API.routes.createGroup, data);
}

export const RequestsDB = {
  GetChats,
  CreateUser,
  LoginUser,
  AuthUser,
  SearchUser,
  CreateChat,
  CreateGroup
};