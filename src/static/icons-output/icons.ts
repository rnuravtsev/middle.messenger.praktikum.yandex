export type IconsId =
  | "clip"
  | "loupe"
  | "menu";

export type IconsKey =
  | "Clip"
  | "Loupe"
  | "Menu";

export enum Icons {
  Clip = "clip",
  Loupe = "loupe",
  Menu = "menu",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Clip]: "61697",
  [Icons.Loupe]: "61698",
  [Icons.Menu]: "61699",
};
