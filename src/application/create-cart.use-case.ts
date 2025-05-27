import { ICart, ICreateCart } from "../domain/entity/cart.entity.interface";
import { CartService } from "../domain/service/cart-service";
import { IUseCase } from "../domain/use-case/carts.use-case.interface";

export class CreateCartUseCase implements IUseCase<ICreateCart, ICart> {
  constructor(private readonly cartService: CartService) {}

  async execute(data: ICreateCart): Promise<ICart> {
    const createdCart = await this.cartService.createCart(data);
    return createdCart;
  }
}
