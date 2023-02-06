import { isEqual } from '../helpers/helpers'
import store, { State, StoreEvents } from '../utils/Store'

export function withStore(mapStateToProps: (state: State) => Record<string, unknown>) {
  return function wrap(Component: BlockClass) {
    let currentState: Record<string, unknown>
    return class extends Component {
      public static componentName = Component.componentName || Component.name

      constructor(props: object) {
        currentState = mapStateToProps(store.getState())

        super({ ...props, ...currentState })

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState())

          if(isEqual(currentState, stateProps)) return

          this.setProps({ ...stateProps })
        })
      }
    }
  }
}
export default withStore
