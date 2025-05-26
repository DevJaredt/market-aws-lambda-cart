import { ICart } from "../entity/cart.entity.interface";

export interface ICartRepository {
  save(cart: ICart): Promise<ICart>;
}
