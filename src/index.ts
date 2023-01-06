// import LoginPage from './components/Login/Login';
// import SignUp from './components/SignUp/SignUp';
// import ChatPage from './components/ChatPreview/ChatPreview';
// import Page404 from './components/Page404/Page404';
import './index.scss';
import 'normalize.css/normalize.css'

// Чтобы не засорять файл регистрацией
import './utils/register'
import './utils/handlebarsHelpers'

// FIXME: Подключаю временно стилевой файл, подключать отдельно в компоненты
import "./scss/main.scss";


import renderDOM from "core/renderDOM";
import Main from "./pages/MainPage/MainPage";
import LoginPage from "./pages/Login/LoginPage";
// import Sidebar from "./components/Sidebar/Sidebar";
// import main from "./pages/MainPage/MainPage";

// const chatPage = new ChatPreview({});
// const mainPage = new Main();
const loginPage = new LoginPage({});
// const sidebar = new Sidebar({});

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(loginPage)
})

// TODO: Router

// const location = window.location.pathname.split('/')[1];
//
// if (root instanceof HTMLElement) {
//   switch (location) {
//     case '':
//     case 'login':
//       new LoginPage(root);
//       break;
//     case 'sign-up':
//       new SignUp(root);
//       break;
//     case 'chat':
//       new ChatPage(root);
//       break;
//     default:
//       new Page404(root);
//       break;
//   }
// }
