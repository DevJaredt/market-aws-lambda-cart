import { DynamoDB } from "aws-sdk";
import { ICartRepository } from "../../domain/repository/cart.repository";
import { ICart } from "../../domain/entity/cart.entity.interface";
import { environments } from "../environments/environments.dev";

export class CartRepository implements ICartRepository {
  private readonly tableName: string;
  private readonly docClient: DynamoDB.DocumentClient;

  constructor() {
    this.tableName = environments.cartsTableName;
    this.docClient = new DynamoDB.DocumentClient({
      region: environments.awsRegion,
    });
  }
  async save(cart: ICart): Promise<ICart> {
    await this.docClient
      .put({
        TableName: this.tableName,
        Item: cart,
      })
      .promise();

    return cart;
  }

  async findById(id: string): Promise<ICart | null> {
    try {
      const result = await this.docClient
        .get({
          TableName: this.tableName,
          Key: { id },
        })
        .promise();

      return (result.Item as ICart) || null;
    } catch (error) {
      console.error("Error finding cart by ID:", error);
      return null;
    }
  }
}
