import Block from 'core/Block';
import { isEquals } from 'helpers/helpers';
import store, { StoreEvents } from '../utils/Store';

export function withStore(mapStateToProps: (state: any) => any) {
  return function wrap(Component: typeof Block) {
    let currentState: Record<string, unknown>
    return class extends Component {
      public static componentName = Component.componentName || Component.name;

      constructor(props: any) {
        currentState = mapStateToProps(store.getState());

        super({ ...props, ...currentState });

        store.on(StoreEvents.UPDATED, () => {
          const stateProps = mapStateToProps(store.getState());

          if(isEquals(currentState, stateProps)) return;

          this.setProps({ stateProps });
        });
      }
    }
  }
}
export default withStore;
