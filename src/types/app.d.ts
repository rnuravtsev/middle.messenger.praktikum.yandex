import Block from "../core/Block";

declare global {
  export type Nullable<T> = T | null;
  export type BlockInstance = typeof Block;

  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];
}

export {}
