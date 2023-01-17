// import LoginPage from './components/LoginPage/LoginPage';
// import SignUp from './components/SignUp/SignUp';
// import ChatPage from './components/ChatPreview/ChatPreview';
import 'normalize.css/normalize.css'

// Чтобы не засорять файл регистрацией
import './utils/register'
import './utils/handlebarsHelpers'

// FIXME: Подключаю временно стилевой файл, подключать отдельно в компоненты
import "./scss/main.scss";


import renderDOM from "core/renderDOM";
// import Main from "./pages/MainPage/MainPage";
// import SignUpPage from "./pages/SignUpPage/SignUpPage";
// import ChatPage from "./pages/ChatPage/ChatPage";
import MainPage from "./pages/MainPage/MainPage";
// import Page404 from "./pages/ErrorPages/404/Page404";
// import Page500 from "./pages/ErrorPages/500/Page500";
// import ProfilePage from "./pages/ProfilePage/ProfilePage";
// import ProfileEditPage from "./pages/ProfileEditPage/ProfileEditPage";
// import ProfileEditPass from "./pages/ProfileEditPass/ProfileEditPass";
// import Sidebar from "./components/Sidebar/Sidebar";
// import main from "./pages/MainPage/MainPage";

// const chatPage = new ChatPreview({});
// const mainPage = new Main();
const editProfilePassPage = new MainPage();
// const sidebar = new Sidebar({});

document.addEventListener("DOMContentLoaded", () => {
  renderDOM(editProfilePassPage)
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

