// import LoginPage from './components/Login/Login';
// import SignUp from './components/SignUp/SignUp';
// import ChatPage from './components/Chat/Chat';
// import Page404 from './components/Page404/Page404';
import './index.scss';
import 'normalize.css/normalize.css'

// Чтобы не засорять файл регистрацией
import './utils/register'

// FIXME: Подключаю временно стилевой файл, подключать отдельно в компоненты
import "./scss/main.scss";


import renderDOM from "core/renderDOM";
import Main from "./pages/Main/Main";

// const chatPage = new Chat({});
const mainPage = new Main();

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(mainPage)
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
