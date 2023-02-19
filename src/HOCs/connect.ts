import { isEqual } from '../helpers/helpers'
import store, { State, StoreEvents } from '../utils/Store'

export function connect(mapStateToProps: (state: State) => Record<string, unknown>) {
  return function wrap(Component: BlockClass){
    return class WithStore extends Component {

      constructor(props: any) {
        let previousState = mapStateToProps(store.getState())

        super({ ...props, ...previousState })

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState())

          if(isEqual(previousState, stateProps)) return

          this.setProps({ ...stateProps })

          previousState = stateProps
        })
      }
    }

  }
}

export default connect
