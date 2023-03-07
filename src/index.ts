import 'normalize.css/normalize.css'
import './utils/register'
import './scss/main.scss'
import LoginPage from './pages/LoginPage/LoginPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import Page404 from './pages/ErrorPages/404/Page404'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import Messenger from './pages/Messenger/Messenger'
import ProfileEditPage from './pages/ProfileEditPage/ProfileEditPage'
import ProfileEditPass from './pages/ProfileEditPass/ProfileEditPass'
import Router from 'core/Router/Router'
import AuthController from './controllers/AuthController'
import './controllers/MessagesController'
import { Routes } from './core/Router/types'

const initRouter = async (router: typeof Router, checkIsUserAuthorized: () => void) => {
  Router
    .use(Routes.Home, LoginPage)
    .use(Routes.Messenger, Messenger)
    .use(Routes.Login, LoginPage)
    .use(Routes.SignUp, SignUpPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Settings, ProfileEditPage)
    .use(Routes.ProfileEditPass, ProfileEditPass)
    .use(Routes.NoFound, Page404)

  let isProtectedRoute = true

  switch (window.location.pathname) {
    case Routes.Home:
    case Routes.Login:
    case Routes.SignUp:
      isProtectedRoute = false
      break
  }

  try {
    await checkIsUserAuthorized()

    router.start()

    if (!isProtectedRoute) {
      router.go(Routes.Messenger)
    }
  } catch (e) {
    router.start()

    if (isProtectedRoute) {
      router.go(Routes.Home)
    }
  }
}

const initApp = () => {
  initRouter(Router, AuthController.fetchUser)
}

window.addEventListener('DOMContentLoaded', async () => {
  initApp()
})
