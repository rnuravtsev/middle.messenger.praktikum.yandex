import Route from "./Route";

class Router {
  public readonly routes: Route[] | undefined;
  private _history: History | undefined;
  private readonly _currentRoute: Nullable<Route> | undefined;
  private readonly _rootQuery: string | undefined;
  static _instance: Router;
  constructor(rootQuery: string) {
    if (Router._instance) {
      return Router._instance;
    }

    this.routes = [];
    this._history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router._instance = this;
  }

  use(pathname: string, Block: BlockInstance) {
    const route = new Route(pathname, Block, {rootQuery: this._rootQuery});

    this.routes?.push(route);

    return this;
  }

  start() {
    window.onpopstate = (evt: PopStateEvent) => {
      const currentTarget = evt.currentTarget as Window;
      this._onRoute(currentTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if(this._currentRoute) {
      this._currentRoute.leave();
    }

    route.render();
  }

  go(pathname: string) {
    this._history?.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  getRoute(pathname: string) {
    return this.routes?.find(route => route.match(pathname));
  }
}

export default Router;