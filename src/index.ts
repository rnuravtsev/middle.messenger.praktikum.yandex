import 'normalize.css/normalize.css'
import './utils/register'
import './scss/main.scss';
import LoginPage from './pages/LoginPage/LoginPage';
import Onboard from './pages/Onboard/Onboard';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Page404 from './pages/ErrorPages/404/Page404';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import MainPage from './pages/MainPage/MainPage';
import ProfileEditPage from './pages/ProfileEditPage/ProfileEditPage';
import ProfileEditPass from './pages/ProfileEditPass/ProfileEditPass';
import Router from 'core/Router';

enum Routes {
  Onboard = '/',
  Login = '/login',
  SignUp = '/sign-up',
  Profile = '/profile',
  ProfileEdit = '/profile/edit',
  ProfileEditPass = '/profile/edit-pass',
  Chat = '/chat',
}

window.addEventListener('DOMContentLoaded', () => {

  Router
    .use(Routes.Onboard, Onboard)
    .use(Routes.Chat, MainPage)
    .use(Routes.Login, LoginPage)
    .use(Routes.SignUp, SignUpPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.ProfileEdit, ProfileEditPage)
    .use(Routes.ProfileEditPass, ProfileEditPass)
    // TODO: Перенаправление на 404
    .use('*', Page404)

  try {
    Router.start()
  }
  catch (e) {
    Router.start()
  }

});
