import Block from "core/Block";
import './table.scss';

type TableProps = {
  className: string,
  data: unknown[],
}


class Table extends Block {
  constructor(props: TableProps) {
    super(props);
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

export default Table;
