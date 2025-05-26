module "api-gateway" {
  source = "./modules/api-gateway"

  api_name =  "carts-service-api"
  api_description = "API for carts management service"
}

output "api_endpoint" {
  value = module.api-gateway.api_endpoint
}