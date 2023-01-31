import render from './renderDOM';
import Block from './Block';
import { isEqual } from '../helpers/helpers';

export default class Route {
  private _pathname: string;
  private readonly _blockClass: BlockClass;
  protected block: Nullable<Block>;
  private readonly _props: any;
  constructor(pathname: string, view: BlockClass, props: any) {
    this._pathname = pathname;
    this._blockClass = view;
    this.block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this.block) {
      this.block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this.block) {
      this.block = new this._blockClass(this._props);
      render(this.block as Block);
      return;
    }

    this.block.show();
  }
}
