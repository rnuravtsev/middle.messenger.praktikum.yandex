export type IconsId =
  | "2check"
  | "arrow-right"
  | "avatar"
  | "chevron-forward"
  | "circle-cross"
  | "circle-plus"
  | "clip"
  | "loupe"
  | "menu"
  | "square-and-pencil"
  | "trash"
  | "xmark";

export type IconsKey =
  | "i2check"
  | "ArrowRight"
  | "Avatar"
  | "ChevronForward"
  | "CircleCross"
  | "CirclePlus"
  | "Clip"
  | "Loupe"
  | "Menu"
  | "SquareAndPencil"
  | "Trash"
  | "Xmark";

export enum Icons {
  i2check = "2check",
  ArrowRight = "arrow-right",
  Avatar = "avatar",
  ChevronForward = "chevron-forward",
  CircleCross = "circle-cross",
  CirclePlus = "circle-plus",
  Clip = "clip",
  Loupe = "loupe",
  Menu = "menu",
  SquareAndPencil = "square-and-pencil",
  Trash = "trash",
  Xmark = "xmark",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.i2check]: "61697",
  [Icons.ArrowRight]: "61698",
  [Icons.Avatar]: "61699",
  [Icons.ChevronForward]: "61700",
  [Icons.CircleCross]: "61701",
  [Icons.CirclePlus]: "61702",
  [Icons.Clip]: "61703",
  [Icons.Loupe]: "61704",
  [Icons.Menu]: "61705",
  [Icons.SquareAndPencil]: "61706",
  [Icons.Trash]: "61707",
  [Icons.Xmark]: "61708",
};
