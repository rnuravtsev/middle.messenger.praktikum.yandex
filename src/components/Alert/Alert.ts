import Block from 'core/Block'
import './alert.scss'
import { AlertProps } from './types'
import connect from '../../HOCs/connect'
import { State } from '../../utils/Store'

class Alert extends Block {
  static componentName = 'Alert'

  constructor(props: AlertProps = {} as AlertProps) {
    super(props)
  }

  render() {
    const { error } = this.props
    // language=hbs
    return `
        <div class="alert {{className}}">
            ${error ? error : ''}
        </div>
      `
  }
}

const mapStateToProps = (state: State) => ({
  error: Object.values(state).find((item: any) => item?.error?.message)
})

export default connect(mapStateToProps)(Alert)
