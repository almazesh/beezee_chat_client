



const routes = {
  chat: "/api/chat/all",
  createUser: "/api/user/create",
  loginUser: "/api/user/login",
  authUser: "/api/user/me",
  searchUser: (name) => `/api/user?search=${name}`,
  createChat: "/api/chat/create"
}


export const API = {
  routes
}