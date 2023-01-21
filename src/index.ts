import 'normalize.css/normalize.css'
import './utils/register'
import "./scss/main.scss";
import LoginPage from "./pages/LoginPage/LoginPage";
import Onboard from "./pages/Onboard/Onboard";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Page404 from "./pages/ErrorPages/404/Page404";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MainPage from "./pages/MainPage/MainPage";
import ProfileEditPage from "./pages/ProfileEditPage/ProfileEditPage";
import ProfileEditPass from "./pages/ProfileEditPass/ProfileEditPass";
import Router from "core/Router";

const router = new Router('#app');

router
  .use('/', Onboard)
  .use('/chat', MainPage)
  .use('/login', LoginPage)
  .use('/sign-up', SignUpPage)
  .use('/profile', ProfilePage)
  .use('/profile/edit', ProfileEditPage)
  .use('/profile/edit/password', ProfileEditPass)
  // TODO: Перенаправление на 404
  .use('*', Page404)
  .start();
