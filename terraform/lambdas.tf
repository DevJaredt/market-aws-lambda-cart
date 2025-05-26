module "lambda-shared" {
  source = "./modules/shared-resources"
  role_name = "carts_lambda_role"
  dynamodb_table_arn = module.dynamodb.table_arn
}

module "create_cart_lambda" {
  source                    = "./modules/lambda"
  function_name             = "create-cart"
  lambda_role_arn           = module.lambda-shared.lambda_role_arn
  zip_file                  = "${path.module}/../lambdas/create-cart.zip"
  source_code_hash          = filebase64sha256("${path.module}/../lambdas/create-cart.zip")
  api_gateway_id            = module.api-gateway.api_id
  api_gateway_execution_arn = module.api-gateway.execution_arn

  environment_variables = {
    ENV         = "dev"
    CARTS_TABLE = module.dynamodb.table_name
  }
}

resource "aws_apigatewayv2_route" "create_cart_route" {
  api_id    = module.api-gateway.api_id
  route_key = "POST /carts/create"
  target    = "integrations/${module.create_cart_lambda.integration_id}"
}