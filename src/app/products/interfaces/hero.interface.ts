

export enum Color {
  red = 'Vermell', black = 'Negre', blue = 'Blau', green = 'Verd'
}

export interface Hero {
  name: string;
  canFlay: boolean;
  color: Color
}
