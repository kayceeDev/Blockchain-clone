import LoginComponent from "../components/login/Login";
import HomeComponent from "../views/Home";

const routes = [
  {
    path: "/",
    component: LoginComponent,
    title: "Login",
  },

  {
    path: "/home",
    component: HomeComponent,
    title: "Home",
  },
];

export default routes;
