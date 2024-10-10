export type IProducts = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  qtd: number;
};

export type ISale = IProducts & {
  qtd: number;
};
