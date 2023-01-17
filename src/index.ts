import 'normalize.css/normalize.css'
import './utils/register'
import './utils/handlebarsHelpers'
import "./scss/main.scss";
import renderDOM from "core/renderDOM";
import Block from 'core/Block';
import LoginPage from "./pages/LoginPage/LoginPage";
import Onboard from "./pages/Onboard/Onboard";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import Page404 from "./pages/ErrorPages/404/Page404";

// TODO: Router
const location = window.location.pathname.split('/')[1];

console.log('911.', location)

let root: Block<any> | null = null;

switch (location) {
  case '':
    root = new Onboard();
    break;
  case 'login':
    root = new LoginPage();
    break;
  case 'signup':
    root = new SignUpPage();
    break;
  case 'chat':
    root = new ChatPage();
    break;
  default:
    root = new Page404();
    break;
}

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(root!);
})
