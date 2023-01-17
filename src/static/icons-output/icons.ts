export type IconsId =
  | "2check"
  | "clip"
  | "loupe"
  | "menu";

export type IconsKey =
  | "i2check"
  | "Clip"
  | "Loupe"
  | "Menu";

export enum Icons {
  i2check = "2check",
  Clip = "clip",
  Loupe = "loupe",
  Menu = "menu",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.i2check]: "61697",
  [Icons.Clip]: "61698",
  [Icons.Loupe]: "61699",
  [Icons.Menu]: "61700",
};
