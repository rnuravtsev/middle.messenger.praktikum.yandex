import render from './renderDOM'
import Block from './Block'

export default class Route {
  private _pathname: string
  private readonly _blockClass: BlockClass
  protected block: Nullable<Block>
  private readonly _props: Indexed
  constructor(pathname: string, view: BlockClass, props: Indexed) {
    this._pathname = pathname
    this._blockClass = view
    this.block = null
    this._props = props
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  leave() {
    this.block = null
  }

  match(pathname: string) {
    return pathname === this._pathname
  }

  render() {
    if (!this.block) {
      this.block = new this._blockClass(this._props)
      render(this.block as Block)
      return
    }
  }
}
