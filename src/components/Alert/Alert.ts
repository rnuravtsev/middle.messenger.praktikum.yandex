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
    const { errorItem } = this.props
    const errorMessage = errorItem?.error?.message

    // language=hbs
    return `
        <div class="alert {{className}} ${errorMessage ? 'alert_open' : ''}">
            ${errorMessage}
        </div>
      `
  }
}

const mapStateToProps = (state: State) => ({
  errorItem: Object.values(state).find((item: any) => item?.error)
})

export default connect(mapStateToProps)(Alert)
