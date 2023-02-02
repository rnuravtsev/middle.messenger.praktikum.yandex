export type IconsId =
  | "2check"
  | "avatar"
  | "circle-cross"
  | "circle-plus"
  | "clip"
  | "loupe"
  | "menu"
  | "square-and-pencil";

export type IconsKey =
  | "i2check"
  | "Avatar"
  | "CircleCross"
  | "CirclePlus"
  | "Clip"
  | "Loupe"
  | "Menu"
  | "SquareAndPencil";

export enum Icons {
  i2check = "2check",
  Avatar = "avatar",
  CircleCross = "circle-cross",
  CirclePlus = "circle-plus",
  Clip = "clip",
  Loupe = "loupe",
  Menu = "menu",
  SquareAndPencil = "square-and-pencil",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.i2check]: "61697",
  [Icons.Avatar]: "61698",
  [Icons.CircleCross]: "61699",
  [Icons.CirclePlus]: "61700",
  [Icons.Clip]: "61701",
  [Icons.Loupe]: "61702",
  [Icons.Menu]: "61703",
  [Icons.SquareAndPencil]: "61704",
};
