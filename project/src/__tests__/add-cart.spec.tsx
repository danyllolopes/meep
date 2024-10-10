import { ISale } from "../types/ProductType";
import { totalPrice } from "../utils/productUtil";

describe("Sum of values and quantities", () => {
  test('should calculate the total price of products', () => {
    const products: ISale[] = [
      { id: 1, description: '', name: 'Hamburguer', image: '', price: 10, qtd: 2 },
      { id: 2, description: '', name: 'Hamburguer', image: '', price: 5, qtd: 4 },
    ];

    const result = totalPrice(products);
    expect(result).toBe(40)
  });

  test('should return 0 for an empty product array', () => {
    const products: ISale[] = [];

    const result = totalPrice(products);
    expect(result).toBe(0);
  });

  test('should handle products with decimal values', () => {
    const products: ISale[] = [
      { id: 1, description: '', name: 'Hamburguer', image: '', price: 10.5, qtd: 2 },
      { id: 2, description: '', name: 'Hamburguer', image: '', price: 5.75, qtd: 3 },
    ];

    const result = totalPrice(products);
    expect(result).toBeCloseTo(38.25);
  });
});