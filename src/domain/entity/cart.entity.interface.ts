export interface ICartProduct {
    uuid: string;
}

export type CartStatus = 'pending' | 'paid' | 'cancelled';

export interface ICart {
    id: string;
    userId: string;
    products: ICartProduct[];
    total: number;
    createdAt: string;
    status: CartStatus;
}

export interface ICreateCart extends Omit<ICart, 'id' | 'createdAt' | 'status'> {}

export interface ICartResponse extends ICart {}