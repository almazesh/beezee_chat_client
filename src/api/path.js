



const routes = {
  chat: "/api/chat",
  createUser: "/api/user/create",
  loginUser: "/api/user/login",
  authUser: "/api/user/me",
  searchUser: (name) => `/api/user?search=${name}`
}


export const API = {
  routes
}