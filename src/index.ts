import 'normalize.css/normalize.css'
import './utils/register'
import './utils/handlebarsHelpers'
import "./scss/main.scss";
import renderDOM from "core/renderDOM";
import Block from 'core/Block';
import LoginPage from "./pages/LoginPage/LoginPage";
import Onboard from "./pages/Onboard/Onboard";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Page404 from "./pages/ErrorPages/404/Page404";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MainPage from "./pages/MainPage/MainPage";
import ProfileEditPage from "./pages/ProfileEditPage/ProfileEditPage";
import ProfileEditPass from "./pages/ProfileEditPass/ProfileEditPass";

// TODO: Router
const location = window.location.pathname;

let root: Block<any> | null = null;

switch (location) {
  case '/':
    root = new Onboard();
    break;
  case '/login':
    root = new LoginPage();
    break;
  case '/sign-up':
    root = new SignUpPage();
    break;
  case '/chat':
    root = new MainPage();
    break;
  case '/profile':
    root = new ProfilePage();
    break;
  case '/profile/edit':
    root = new ProfileEditPage();
    break;
  case '/profile/password':
    root = new ProfileEditPass();
    break;
  default:
    root = new Page404();
    break;
}

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(root!);
})
