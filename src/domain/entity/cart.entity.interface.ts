export interface ICartProduct {
    uuid: string;
}

export interface ICart {
    id: string;
    userId: string;
    products: ICartProduct[];
    total: number;
    createAt: string;
}

export interface ICreateCart extends Omit<ICart, 'id' | 'createdAt'> {}

export interface ICartResponse extends ICart {}