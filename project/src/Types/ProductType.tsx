export type IProducts = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type ISale = IProducts & {
  qtd: number;
};
