import Router from 'core/Router/Router'

type withRouterProps = {
  router: typeof Router;
}
export default function withRouter<P extends withRouterProps>(Component: BlockClass<P>) {
  // @ts-expect-error No base constructor has the specified number of type arguments
    return class extends Component<P> {
      public static componentName = Component.componentName || Component.name
    constructor(props: P) {
      super({ ...props, router: Router })
    }
  }
}
