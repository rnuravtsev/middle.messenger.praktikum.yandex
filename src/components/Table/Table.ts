import Block from 'core/Block'
import './table.scss'
import { User } from '../../api/types'
import { omit } from 'helpers/helpers'
import { LabelName } from '../../helpers/FieldNormalize'

type TableProps = {
  className: string,
  user: User,
}


class Table extends Block {
  constructor(props: TableProps) {
    super(props)

    const { user } = props
    const resolvedUser: {[key: string]: unknown} = {}

    if(user) {
      const omittedUser: {[key: string]: unknown} = omit(user, ['id'])

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

  static componentName = 'Table'

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
