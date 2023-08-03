export interface IMenu {
  name: string;
  image: any;
  price: number;
  ingredients: string[];
  count: number;
  id: number;
}

export interface IInitialState {
  basket: IMenu[];
}
