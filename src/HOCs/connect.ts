import { isEqual } from '../helpers/helpers'
import store, { State, StoreEvents } from '../utils/Store'

export function connect(mapStateToProps: (state: State) => Record<string, unknown>) {
  return function wrap(Component: BlockClass){
    return class Connect extends Component {

      constructor(props: any) {
        let previousState = mapStateToProps(store.getState())

        super({ ...props, ...previousState })

        store.on(StoreEvents.Updated, (actualState) => {
          const stateProps = mapStateToProps(actualState)

          if(isEqual(previousState, stateProps)) return

          previousState = stateProps

          this.setProps({ ...stateProps })
        })
      }
    }

  }
}

export default connect
