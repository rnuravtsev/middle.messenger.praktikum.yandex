import Block from 'core/Block'
import './loader.scss'
import { LoaderProps } from './types'

class Loader extends Block {
  static componentName = 'Loader'

  constructor(props: LoaderProps = {} as LoaderProps) {
    super(props)
  }

  render() {
    // language=hbs
    return `
        <div class="loader {{className}}">
            <div class="row">
                <div class="loader__arrow loader__up loader__outer loader__outer-18"></div>
                <div class="loader__arrow loader__down loader__outer loader__outer-17"></div>
                <div class="loader__arrow loader__up loader__outer loader__outer-16"></div>
                <div class="loader__arrow loader__down loader__outer loader__outer-15"></div>
                <div class="loader__arrow loader__up loader__outer loader__outer-14"></div>
            </div>
            <div class="row">
                <div class="loader__arrow loader__up loader__outer loader__outer-1"></div>
                <div class="loader__arrow loader__down loader__outer loader__outer-2"></div>
                <div class="loader__arrow loader__up loader__inner loader__inner-6"></div>
                <div class="loader__arrow loader__down loader__inner loader__inner-5"></div>
                <div class="loader__arrow loader__up loader__inner loader__inner-4"></div>
                <div class="loader__arrow loader__down loader__outer loader__outer-13"></div>
                <div class="loader__arrow loader__up loader__outer loader__outer-12"></div>
            </div>
            <div class="row">
                <div class="loader__arrow loader__down loader__outer loader__outer-3"></div>
                <div class="loader__arrow loader__up loader__outer loader__outer-4"></div>
                <div class="loader__arrow loader__down loader__inner loader__inner-1"></div>
                <div class="loader__arrow loader__up loader__inner loader__inner-2"></div>
                <div class="loader__arrow loader__down loader__inner loader__inner-3"></div>
                <div class="loader__arrow loader__up loader__outer loader__outer-11"></div>
                <div class="loader__arrow loader__down loader__outer loader__outer-10"></div>
            </div>
            <div class="row">
                <div class="loader__arrow loader__down loader__outer loader__outer-5"></div>
                <div class="loader__arrow loader__up loader__outer loader__outer-6"></div>
                <div class="loader__arrow loader__down loader__outer loader__outer-7"></div>
                <div class="loader__arrow loader__up loader__outer loader__outer-8"></div>
                <div class="loader__arrow loader__down loader__outer loader__outer-9"></div>
            </div>
        </div>
    `
  }
}

export default Loader
