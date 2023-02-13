import 'normalize.css/normalize.css'
import './utils/register'
import './scss/main.scss'
import LoginPage from './pages/LoginPage/LoginPage'
import Onboard from './pages/Onboard/Onboard'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import Page404 from './pages/ErrorPages/404/Page404'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import Messenger from './pages/Messenger/Messenger'
import ProfileEditPage from './pages/ProfileEditPage/ProfileEditPage'
import ProfileEditPass from './pages/ProfileEditPass/ProfileEditPass'
import Router from 'core/Router'
import AuthController from './controllers/AuthController'
import './controllers/MessagesController'
import { Modal } from './components/Modal/ModalForm/ModalForm'
import store from './utils/Store'

export enum Routes {
  Onboard = '/',
  Login = '/login',
  SignUp = '/sign-up',
  Profile = '/profile',
  ProfileEdit = '/profile/edit',
  ProfileEditPass = '/profile/edit-pass',
  Messenger = '/messenger',
  Logout = '/logout',
}


window.addEventListener('DOMContentLoaded', async () => {

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      store.set('modal', { name: Modal.AddUser, isOpen: false })
    }
  })

  Router
    .use(Routes.Onboard, Onboard)
    .use(Routes.Messenger, Messenger)
    .use(Routes.Login, LoginPage)
    .use(Routes.SignUp, SignUpPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.ProfileEdit, ProfileEditPage)
    .use(Routes.ProfileEditPass, ProfileEditPass)
    // TODO: Перенаправление на 404
    .use('*', Page404)

  try {
    await AuthController.fetchUser()
    Router.start()
  }
  catch (e) {
    Router.start()
  }

})
