import Block from 'core/Block'
import './table.scss'
import { omit } from 'helpers/helpers'
import { LabelName } from '../../helpers/FieldNormalize'
import { TableProps } from './types'

class Table extends Block {
  static componentName = 'Table'
  constructor(props: TableProps) {
    super(props)

    const { user } = props
    const resolvedUser: Indexed = {}

    if (user) {
      const omittedUser: Indexed = omit(user, ['id', 'avatar'])

      const userWithoutEmptyProperties = Object.entries(omittedUser).reduce((acc, [key, value]) => {
        if(value) {
          acc[key] = value
        }
        return acc
      }, resolvedUser)

      this.setProps({
        data:
          Object.entries(userWithoutEmptyProperties)
          .map(([key, value]) => ({ title: LabelName[key], text: value }))
      })
    }
  }


    render() {
    // language=hbs
    return `
        <table class="table {{className}}">
            <tbody>
            {{#each data}}
                <tr>
                    <td>
                        {{this.title}}
                    </td>
                    <td>
                        {{this.text}}
                    </td>
                </tr>
            {{/each}}
            </tbody>
        </table>

    `
  }
}

export default Table
