import { ICart, ICreateCart } from "../entity/cart.entity.interface";
import { ICartRepository } from "../repository/cart.repository";
import { v4 as uuidv4 } from "uuid";

export class CartService {
  constructor(private readonly cartRepository: ICartRepository) {}

  async createCart(data: ICreateCart): Promise<ICart> {
    const cart: ICart = {
      id: uuidv4(),
      userId: data.userId,
      products: data.products,
      total: data.total,
      createdAt: new Date().toISOString(),
      status: "paid",
    };
    await this.cartRepository.save(cart);

    return cart;
  }
}
