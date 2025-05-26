import { ICreateCart } from "../entity/cart.entity.interface";
import { CartService } from "../service/cart.srv";

export class CreateCartUseCase {
    constructor(private readonly cartService: CartService) {}

    async execute(data: ICreateCart): Promise<ICreateCart> {
        const createdCart = await this.cartService.createCart(data);
        return createdCart;
    }
}   