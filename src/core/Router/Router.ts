import Route from '../Route'
import { Routes } from './types'

const APP_ROOT_SELECTOR = '#app'

class Router {
  public routes: Route[] = []
  private _history: History | undefined
  private _currentRoute: Nullable<Route> | undefined
  private readonly _rootQuery: string | undefined
  static _instance: Router
  constructor(rootQuery: string) {
    if (Router._instance) {
      return Router._instance
    }

    this.routes = []
    this._history = window.history
    this._currentRoute = null
    this._rootQuery = rootQuery

    Router._instance = this
  }

  use(pathname: string, Block: BlockClass) {
    const route = new Route(pathname, Block, { rootQuery: this._rootQuery })

    this.routes?.push(route)

    return this
  }

  public reset() {
    this.routes = []
    this._currentRoute = null
  }

  start() {
    window.onpopstate = (evt: PopStateEvent) => {
      const currentTarget = evt.currentTarget as Window
      this._onRoute(currentTarget.location.pathname)
    }

    this._onRoute(window.location.pathname)
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname)
    if (!route) {
      this.go(Routes.NoFound)
      return
    }

    if(this._currentRoute) {
      this._currentRoute.leave()
    }

    this._currentRoute = route

    route.render()
  }

  public go(pathname: string) {
    this._history?.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  public forward() {
    this._history?.forward()
  }

  public back() {
    this._history?.back()
  }

  getRoute(pathname: string) {
    return this.routes?.find(route => route.match(pathname))
  }
}

export { Router }

const router = new Router(APP_ROOT_SELECTOR)

export default router
