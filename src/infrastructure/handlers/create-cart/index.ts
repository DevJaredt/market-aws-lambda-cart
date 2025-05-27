import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { CartRepository } from "../../repository/carts.repository";
import { CartService } from "../../../domain/service/cart-service";
import { CreateCartUseCase } from "../../../application/create-cart.use-case";
import { ICreateCart } from "../../../domain/entity/cart.entity.interface";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const userId = event.requestContext.authorizer?.lambda?.userId;

    if (!userId) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: "Unauthorized" }),
      };
    }

    const body = JSON.parse(event.body || "{}") as ICreateCart;

    const repository = new CartRepository();
    const service = new CartService(repository);
    const useCase = new CreateCartUseCase(service);

    const result = await useCase.execute({ ...body, userId });

    return {
      statusCode: 201,
      body: JSON.stringify(result),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message || "Internal Server Error",
      }),
    };
  }
};
