import Block from '../core/Block';

declare global {
  export type Nullable<T> = T | null;
  export interface BlockClass<P extends object = any> extends Function {
    new (props: P): Block<P>;
    componentName?: string;
  }

  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];
}

export {}
